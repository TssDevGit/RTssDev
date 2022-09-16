import React from 'react';
import * as msal from 'msal'

const state = {
    stopLoopingRedirect: false,
    config: {
      scopes: [],
      cacheLocation: null,
    },
    launchApp: null,
    accessToken: null,
    msalObj: null,
    userInfoEmail:null,
    userInfoname:null
  }

const LOCAL_STORAGE = 'localStorage'
const SESSION_STORAGE = 'sessionStorage'
const AUTHORIZATION_KEY = 'Authorization'
  
var isIE = function isIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ") > -1;
    var msie11 = ua.indexOf("Trident/") > -1;
    return msie || msie11;
  };

  var B2C_SCOPES = {
    API_ACCESS: {
      scopes: ['https://TssTenentdemo.onmicrosoft.com/0ed11ab2-fb0b-4658-8fbd-ad84efc1076c/Users.Read']
    }
  };
  
  var msalAppConfig = {
    auth: {
      clientId: '0ed11ab2-fb0b-4658-8fbd-ad84efc1076c',
      authority: 'https://TssTenentdemo.b2clogin.com/TssTenentdemo.onmicrosoft.com/B2C_1_TssT_SuSi',
      redirectUri: 'http://localhost:3000/',
      validateAuthority: false,
      postLogoutRedirectUri: 'http://localhost:3000/'
    },
    cache: {
      cacheLocation: 'sessionStorage',
      storeAuthStateInCookie: isIE()
    }
  };
  

  function acquireToken (successCallback) {
    const account = msalApp.getAccount()
    if (!account) {
      msalApp.loginRedirect(B2C_SCOPES.API_ACCESS)
    } else {
      console.log("@@@@",account.idToken.given_name);
      console.log("@@@@",account.idToken.emails);
      msalApp.acquireTokenSilent(B2C_SCOPES.API_ACCESS).then(accessToken => {  
        if (msalAppConfig.cache.cacheLocation === LOCAL_STORAGE) {
            window.localStorage.setItem(AUTHORIZATION_KEY, 'Bearer ' + accessToken)
          } else {
            window.sessionStorage.setItem(AUTHORIZATION_KEY, 'Bearer ' + accessToken)
          }
          
        state.accessToken = accessToken
        if (state.launchApp) {
          state.launchApp()
        }
        if (successCallback) {
          successCallback()
        }
      }, error => {
        if (error) {
          msalApp.acquireTokenRedirect(B2C_SCOPES.API_ACCESS)
        }
      })
    }
    
    userInfoEmail= account.idToken.emails
    userInfoname= account.idToken.name
    
  }
  let userInfoEmail;
  let userInfoname;
  let msalApp;

  var authentication = {
    initialize: () => {
        console.log("aaa");
        msalApp = new msal.UserAgentApplication(msalAppConfig)
        console.log("userinfo?",msalApp);
      },
    run: (launchApp) => {
      //alert("LAUNCH APP")
        state.launchApp = launchApp
        msalApp.handleRedirectCallback(error => {
          if (error) {
            const errorMessage = error.errorMessage ? error.errorMessage : "Unable to acquire access token."
            console.log(errorMessage)
            alert(errorMessage);
          }
        });
      acquireToken();
      console.log("userInfoEmail?",userInfoEmail);
      localStorage.setItem(`userInfoEmail`,userInfoEmail);
      localStorage.setItem(`name`,userInfoname);
    },
    required: (WrappedComponent, renderLoading) => {
      //alert("LAUNCH REQUIRED")
        return class extends React.Component {
          constructor (props) {
            super(props)
            this.state = {
              signedIn: false,
              error: null
            }
          }
    
          render () {
            if (this.state.signedIn) {
              return (<WrappedComponent {...this.props} />)
              
            }
            return typeof renderLoading === 'function' ? renderLoading() : null
          }
        }
      },

    signOut: function signOut() {
      return msalApp.logout();
    },
    getAccessToken: function getAccessToken() {
      
      return state.accessToken;
    }
    
  };
  
  

  export default authentication;
