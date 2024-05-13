export type TeacherCardProps = {
  data: {
    _id: string;
    username: string;
    profileImage: string;
    subjects: string[];
    description: string;
    lectures: any[];
  };
  studyPhase?: string;
};
