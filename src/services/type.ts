export type CreateLectureType = {
  title: string;
  description: string;
  price: string;
  studyPhase: string;
  videoId: string;
  thumbnailId: string;
};

export type CreateTeacherType = {
  username: string;
  description: string;
  email: string;
  phoneNumber: string;
  password: string;
  passwordConfirmation: string;
  studyPhase: '1' | '2' | '3'[];
  subjects: string[];
  profileImage: string;
};
