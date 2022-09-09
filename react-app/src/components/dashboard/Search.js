import { useTranslation } from 'react-i18next';

export default function SearchComponent() {
    const { t }  = useTranslation(['page'])
    return (
        <div className="">
            <div className="">
            <select id="exampleSelect" name="select" className="form-select-sm">
                <option>{t("page:home.subjectid")}</option>
                <option>{t("page:home.subjectname")}</option>
            </select>
            {/* <input  type="text" className=""  placeholder="Search..."  /> */}
             <input type="text" name="search" placeholder={t("page:home.search")}  className="form-control-sm"></input>
            <button className="btn btn btn-secondary btn-sm">
               {t("page:search")}
            </button>
            </div>
        </div>
    );
}