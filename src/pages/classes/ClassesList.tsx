import React from "react";
import { Curd } from "@/UI";
import { Container } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
interface ClassItem {
  id: number;
  title: string;
  img: string;
}

const ClassesList: React.FC = () => {
  const classes: ClassItem[] = [
    {
      id: Math.random(),
      title: "الصف الاول الثانوى ",
      img: "f5645581-d5f3-432c-8c88-08f12491e42f.jfif",
    },
    {
      id: Math.random(),
      title: " الصف الثانى الثانوى ادبى",
      img: "1aa8f901-ef6a-4c7e-b0e2-9e9430269d75.jfif",
    },
    {
      id: Math.random(),
      title: "الصف الثانى  الثانوى علمى ",
      img: "752d04d4-1f32-49da-ab9a-c4f53f91dbbe.jfif",
    },
    {
      id: Math.random(),
      title: "الصف الثالث  الثانوى ادبى",
      img: "a146d5b3-69ab-44d1-8393-4e1636446ba1.jfif",
    },
    {
      id: Math.random(),
      title: "الصف الثالث الثانوى علمى ",
      img: "a6f6e9eb-ef2e-4b9e-9243-c34a3792cbf5.jfif",
    },
  ];

  return (
    <div className="mt-[80px] mb-[50px]">
      <div className="flex justify-center ">
        <StarRateIcon className="text-blue-500 m-2" />
        <h1> الصفوف الدراسية </h1>
        <StarRateIcon className="text-blue-500 m-2" />
      </div>
      <Container>
        <div className="flex flex-wrap rtl" style={{ direction: "rtl" }}>
          {classes.map((classe) => (
            <Curd
              key={classe.id}
              title={classe.title}
              description=""
              img={classe.img}
              type="classe"
              href={`classes/${classe.id}`}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ClassesList;
