export type NavItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
};

export type Teacher = {
  id: string;
  name: string;
  subject: string;
  experience: number;
  rating: number;
  reviewCount: number;
  bio: string;
};

export type Lesson = {
  id: string;
  teacherName: string;
  subject: string;
  date: string;
  time: string;
  duration: number;
  status: "upcoming" | "completed" | "cancelled";
};

export type Message = {
  id: string;
  senderName: string;
  preview: string;
  time: string;
  unread: boolean;
};

export type Student = {
  id: string;
  name: string;
  email: string;
  packageName: string;
  totalLessons: number;
  usedLessons: number;
  remainingLessons: number;
};
