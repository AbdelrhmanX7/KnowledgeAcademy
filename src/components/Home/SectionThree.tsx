import React from "react";
import Image from "next/image";

import Container from "@mui/material/Container";

const SectionThree: React.FC = () => {
  return (
    <div className="section-content mt-10 mb-10">
      <Container>
        <div
          className="flex flex-col md:flex-row items-center justify-between"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="mb-6 md:mb-0">
            <img src="book.png" className="w-[400px]" />
          </div>

          <div className="md:ml-10 flex items-center">
            <div className="section-content">
              <h3 className=" animated-element text-center flex justify-center mb-10 md:text-right">
                ماذا نقدم للطالب @
              </h3>

              <div className="text-right" style={{ direction: "rtl" }}>
                <p className="mb-5 w-[500px]">
                  توفر المنصة للطلاب تجربة فريدة وسهلة وآمنة للتعلم عن بعد، حيث
                  يمكن للطالب اختيار مدرس المادة من بين مجموعة من أفضل المدرسين
                  الأكفاء في جميع المواد الدراسية.
                </p>

                <ul className="list-disc pl-8">
                  <li className="mb-2">تجربة آمنة</li>
                  <li className="mb-2">تغطية المناهج الدراسية</li>
                  <li className="mb-2">امتحانات دورية مستمرة</li>
                  <li className="mb-2">
                    جودة عالية في الشرح مع أكفاء المدرسين
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SectionThree;
