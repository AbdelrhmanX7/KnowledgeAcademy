import { useRouter } from "next/router";
import SectionOne from "@/components/Home/SectionOne";
import { Curd } from "@/UI";
import img from "../../../imgs/صورة-رجل-الأعمال-في-نمط-ملون-600-x-600.jpeg";
import Container from "@mui/material/Container";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarBorderPurple500SharpIcon from "@mui/icons-material/StarBorderPurple500Sharp";
const ClassesDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  // افتراضياً، لدينا مصفوفة مواد دراسية مع معلومات المدرسين
  const subjects = [
    {
      id: Math.random(),
      title: "عربى ",
      teachers: [
        {
          id: Math.random(),
          name: "أحمد علي",
          img: { img },
        },
        {
          id: Math.random(),
          name: "أحمد علي",
          img: { img },
        },
        {
          id: Math.random(),
          name: "أحمد علي",
          img: { img },
        },
        {
          id: Math.random(),
          name: "أحمد علي",
          img: { img },
        },
      ],
    },
    {
      id: Math.random(),
      title: "انجليزى ",
      teachers: [
        {
          id: Math.random(),
          name: "احمد  محمد",
          img: "teacher2.jpg",
        },
        {
          id: Math.random(),
          name: "احمد  محمد",
          img: "teacher2.jpg",
        },
        {
          id: Math.random(),
          name: "احمد  محمد",
          img: "teacher2.jpg",
        },
        // ... معلومات المدرسين الآخرين لهذا المادة
      ],
    },
    {
      id: Math.random(),
      title: "فرنساوى ",
      teachers: [
        {
          id: Math.random(),
          name: "احمد  محمد",
          img: "teacher2.jpg",
        },
        {
          id: Math.random(),
          name: "احمد  محمد",
          img: "teacher2.jpg",
        },
        {
          id: Math.random(),
          name: "احمد  محمد",
          img: "teacher2.jpg",
        },
      ],
    },
  ];

  return (
    <div>
      <SectionOne
        name="الصف الأول الثانوي"
        description="مدرسين ومواد الصف الأول الثانوي"
      />
      <div className="text-center my-8">
        <h1>
          <StarBorderPurple500SharpIcon className="text-red-500 text-5xl" />{" "}
          الصف الاول الثانوى{" "}
          <StarBorderPurple500SharpIcon className="text-red-500 text-5xl" />
        </h1>
      </div>
      <div style={{ direction: "rtl" }} className="rtl my-8">
        <Container maxWidth="lg">
          {subjects.map((subject) => (
            <div key={subject.id}>
              <h1>
                <StarRateIcon className="text-blue-500" /> {subject.title} :
              </h1>
              <div className="flex flex-wrap">
                {subject.teachers.map((teacher) => (
                  <Curd
                    key={teacher.id}
                    title={teacher.name}
                    description=""
                    img={img}
                    type="classe"
                    href={`/teacher/${teacher.id}`}
                  />
                ))}
              </div>
              <p className="w-[100%] mx-auto bg-blue-500 h-0.5"> </p>
            </div>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default ClassesDetails;
