
import icon from "../../img/svg/folderIcon.svg"
export default function CardRepo({project}) {


    return(
        <>
        <div className="projeto">
            <span><img src={icon} alt="" className="icone"/></span>
            <a href={project.clone_url}> {project.name}</a>

        </div>
        
        </>
    )

}