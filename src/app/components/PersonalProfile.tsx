"use client";

import Image from "next/image";
import { FC } from "react";
import bheem from "@/assets/img/bheem.jpeg";
import nepalFlag from "@/assets/img/Nepal-flag.png";
import SocialSiteLink from "./SocialSiteLink";
import {
  FaAngleRight,
  FaCss3,
  FaGit,
  FaHtml5,
  FaJs,
  FaLaravel,
  FaMapMarkerAlt,
  FaPhp,
  FaReact,
  FaJira,
  FaGithub,
  FaGitlab,
  FaBitbucket,
} from "react-icons/fa";
import { SiMysql, SiPostgresql } from "react-icons/si";

const PersonalProfile: FC = () => {
  return (
    <>
      <div className="flex flex-col justify-between items-center p-3">
        <div className="flex flex-col justify-between items-center p-3">
          <div>
            <Image
              src={bheem}
              alt="Bheem"
              width={200}
              height={200}
              priority
              className="rounded-full"
            />
          </div>
          <h1 className="m-2 font-bold">
            <span className="uppercase text-background-img">Bheem Thami</span>
          </h1>
          <div className="flex justify-center items-center">
            <FaMapMarkerAlt size={14} />
            <strong className="ms-1">Nepal</strong>
            <div className="w-3 ms-1">
              <Image
                loading="lazy"
                src={nepalFlag}
                alt="Nepal Flag"
                width={10}
                height={12}
              />
            </div>
          </div>
          <p className="m-2">
            Software Developer @
            <a
              href="https://ditagtech.com.au/"
              target="_blank"
              rel="noreferrer"
            >
              <small>DITAgTECH</small>
            </a>
          </p>
          <SocialSiteLink />
        </div>

        <div className="my-4 flex-wrap">
          <h5 className="font-bold my-2">Experience Summary</h5>
          <ul className="mt-4">
            <li className="flex items-center justify-start gap-2">
              <FaAngleRight /> More than two year of professional experience as
              a web application developer.
            </li>
            <li className="flex items-center justify-start gap-2">
              <FaAngleRight />
              More than five-year experience as a Head of the IT Section in
              Local Government of Nepal.
            </li>
            <li className="flex items-center justify-start gap-2">
              <FaAngleRight />
              Well-equiped in driving the software requirements gathering and
              analysis, development, and deployment.
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h5 className="font-bold my-2">Frontend Development Skills</h5>
          <div className="flex justify-center items-center gap-3 flex-wrap skills mt-4">
            <div className="flex justify-center items-center skills-item p-2">
              <FaJs size={60} className="p-2" /> <span>Javascript</span>
            </div>
            <div className="flex justify-center items-center skills-item p-2">
              <FaReact size={60} className="p-2" /> <span>Reactjs</span>
            </div>
            <div className="flex justify-center items-center skills-item p-2">
              <FaHtml5 size={60} className="p-2" /> <span>HTML5</span>
            </div>
            <div className="flex justify-center items-center skills-item p-2">
              <FaCss3 size={60} className="p-2" /> <span>CSS3</span>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h5 className="font-bold my-2">Backend Developemnt Skills</h5>
          <div className="flex justify-center items-center gap-3 flex-wrap skills mt-4">
            <div className="flex justify-center items-center skills-item p-2">
              <FaPhp size={60} className="p-2" /> <span>PHP</span>
            </div>
            <div className="flex justify-center items-center skills-item p-2">
              <FaLaravel size={60} className="p-2" />
              <span>Laravel</span>
            </div>
            <div className="flex justify-center items-center skills-item p-2">
              <SiMysql size={60} className="p-2" />
              <span>MySql</span>
            </div>
            <div className="flex justify-center items-center skills-item p-2">
              <SiPostgresql size={60} className="p-2" />
              <span>Postgresql</span>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h5 className="font-bold my-2">Version control Skills</h5>
          <div className="flex justify-center items-center gap-3 flex-wrap skills mt-4">
            <div className="flex justify-center items-center skills-item p-2">
              <FaGit size={60} className="p-2" />
              <span>Git</span>
            </div>
            <div className="flex justify-center items-center skills-item p-2">
              <FaGithub size={60} className="p-2" /> <span>Github</span>
            </div>
            <div className="flex justify-center items-center skills-item p-2">
              <FaGitlab size={60} className="p-2" />
              <span> Gitlab</span>
            </div>
            <div className="flex justify-center items-center skills-item p-2">
              <FaBitbucket size={60} className="p-2" /> <span>BitBucket</span>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h5 className="font-bold my-2">Project Management Skills</h5>
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center skills-item p-2">
              <FaJira size={60} className="p-2" /> <span>Jira</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalProfile;
