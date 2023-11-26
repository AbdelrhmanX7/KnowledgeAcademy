import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "../Button";

interface CurdProps {
  img: string | StaticImageData; // نوع الصورة يمكن أن يكون string أو StaticImageData
  href: string;
  title: string;
  description: string;
  type: string;
}

const Curd: React.FC<CurdProps> = ({ img, href, title, description, type }) => {
  return (
    <div className="rounded-lg border shadow-sm w-[20rem] m-8">
      {type === "classe" ? (
        <div className="grid justify-items-center">
          {typeof img === "string" ? (
            <img src={img} alt={title} /> // للصور العادية
          ) : (
            <Image src={img} alt={title} style={{ height: "300px" }} /> // للصور المحملة عبر next/image
          )}
          <Link href={href} className="w-[100%] mx-auto">
            <Button
              variant="secondary"
              label={title}
              className="w-[100%] mx-auto"
            />
          </Link>
        </div>
      ) : (
        <div>
          <div className="text-right">
            <h1 className="m-3"> : {title} </h1>
          </div>
          <p className="w-[90%] mx-auto bg-[#4ac7cf] h-0.5"> </p>
          {typeof img === "string" ? (
            <img src={img} alt={title} /> // للصور العادية
          ) : (
            <Image src={img} alt={title} style={{ height: "300px" }} /> // للصور المحملة عبر next/image
          )}
          <p className="w-[90%] mx-auto bg-[#4ac7cf] h-0.5"> </p>
          <div className="flex justify-between">
            <Button variant="secondary" label=" فتح  " className="m-3" />
            <Button
              variant="secondary"
              label=" ! اشترك الان  "
              className="m-3"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Curd;
