import { faCheck, faCircle, faPhone, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaGithub, FaLinkedin, FaArrowDown, FaReact, FaHtml5, FaCss3, FaAws, FaSass, FaDocker, FaUbuntu } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaPhoneSquare } from "react-icons/fa";
import { SiGithubactions, SiJest, SiLetsencrypt, SiNextdotjs, SiNginx, SiRender, SiRollupdotjs, SiSnyk, SiTailwindcss, SiTypescript, SiVite, SiWebpack } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { RiNpmjsFill } from 'react-icons/ri';

export type IconType = {
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

export const ExitIcon = ({styleClasses}: IconType) => {
    return <FontAwesomeIcon icon={faXmark} className={styleClasses} />;
};

export const CheckIcon = ({styleClasses}: IconType) => {
    return <FontAwesomeIcon icon={faCheck} className={styleClasses} />;
};

export const CircleIcon = ({styleClasses}: IconType) => {
    return <FontAwesomeIcon icon={faCircle} className={styleClasses} />;
};

export const PhoneIcon = ({styleClasses}: IconType) => {
    return <FaPhoneSquare className={styleClasses} />;
};

export const JavaScriptIcon = ({styleClasses}: IconType) => {
    return <IoLogoJavascript className={styleClasses} />;
};

export const TypeScriptIcon = ({styleClasses}: IconType) => {
    return <SiTypescript className={styleClasses} />;
};

export const NextJSIcon = ({styleClasses}: IconType) => {
    return <SiNextdotjs className={styleClasses} />;
};

export const SassIcon = ({styleClasses}: IconType) => {
    return <FaSass className={styleClasses} />;
};

export const NginxIcon = ({styleClasses}: IconType) => {
    return <SiNginx className={styleClasses} />;
};

export const GithubActionsIcon = ({styleClasses}: IconType) => {
    return <SiGithubactions className={styleClasses} />;
};

export const DockerIcon = ({styleClasses}: IconType) => {
    return <FaDocker className={styleClasses} />;
};

export const SnykIcon = ({styleClasses}: IconType) => {
    return <SiSnyk className={styleClasses} />;
};

export const UbuntuIcon = ({styleClasses}: IconType) => {
    return <FaUbuntu className={styleClasses} />;
};

export const TailwindIcon = ({styleClasses}: IconType) => {
    return <SiTailwindcss className={styleClasses} />;
};

export const LetsEncryptIcon = ({styleClasses}: IconType) => {
    return <SiLetsencrypt className={styleClasses} />;
};

export const WebpackIcon = ({styleClasses}: IconType) => {
    return <SiWebpack className={styleClasses} />;
};

export const RenderIcon = ({styleClasses}: IconType) => {
    return <SiRender className={styleClasses} />;
};

export const ViteIcon = ({styleClasses}: IconType) => {
    return <SiVite className={styleClasses} />;
};

export const NPMIcon = ({styleClasses}: IconType) => {
    return <RiNpmjsFill className={styleClasses} />;
};

export const RollupIcon = ({styleClasses}: IconType) => {
    return <SiRollupdotjs className={styleClasses} />;
};

export const JestIcon = ({styleClasses}: IconType) => {
    return <SiJest className={styleClasses} />;
};
