"use client";

import Image from "next/image";
import { FC } from "react";
import bheem from "@/assets/img/bheem.jpeg";
import nepalFlag from "@/assets/img/Nepal-flag.png";
import SocialSiteLink from "./SocialSiteLink";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TbAccessPoint } from "react-icons/tb";
import Link from "next/link";

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
            I&apos;m Bheem <span className="uppercase"> Thami</span>
          </h1>
          <div className="flex justify-center items-center">
            <FaMapMarkerAlt size={14} />
            <strong className="ms-1">Nepal</strong>
            <div className="w-3 ms-1">
              <Image
                src={nepalFlag}
                alt="Nepal Flag"
                width={10}
                height={12}
                priority
              />
            </div>
          </div>
          <p className="m-1">
            Web Developer @
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

        <div>
          <h5 className="font-bold my-2">Experience Summary</h5>
          <ul>
            <li>
              {"-> "}More than two year of professional experience as a web
              application developer.
            </li>
            <li>
              {"-> "}More than five-year experience as a Head of the Information
              Technology Section in Local Government of Nepal.
            </li>
            <li>
              {"-> "}Key contributions in driving the software development life
              cycle including requirements gathering and analysis, design,
              development, testing, and implementation.
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h5 className="font-bold my-2">Skills</h5>
          <p className="">
            {"-> "}HTML, CSS, Reactjs, Nextjs, PHP, Laravel Framework
          </p>
        </div>
      </div>
    </>
  );
};

export default PersonalProfile;
