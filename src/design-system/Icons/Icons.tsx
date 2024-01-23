import { FaGithub, FaLinkedin, FaArrowDown, FaReact, FaHtml5, FaCss3, FaAws  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

type IconType = {
    styleClasses?: string,
}

export const GithubIcon = ({styleClasses}: IconType) => {
    return <FaGithub className={styleClasses} />;
};

export const LinkedInIcon = ({styleClasses}: IconType) => {
    return <FaLinkedin className={styleClasses} />;
};

export const EmailIcon = ({styleClasses}: IconType) => {
    return <MdEmail className={styleClasses} />;
};

export const ArrowDownIcon = ({styleClasses}: IconType) => {
    return <FaArrowDown className={styleClasses} />;
};

export const ReactIcon = ({styleClasses}: IconType) => {
    return <FaReact className={styleClasses} />;
};

export const HTMLIcon = ({styleClasses}: IconType) => {
    return <FaHtml5 className={styleClasses} />;
};

export const CSSIcon = ({styleClasses}: IconType) => {
    return <FaCss3 className={styleClasses} />;
};

export const AWSIcon = ({styleClasses}: IconType) => {
    return <FaAws className={styleClasses} />;
};
