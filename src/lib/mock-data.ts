import type { Teacher, Lesson, Message, Student } from "@/types";

export const mockTeachers: Teacher[] = [
  {
    id: "1",
    name: "Ayşe Kaya",
    subject: "Matematik",
    experience: 8,
    rating: 4.9,
    reviewCount: 124,
    bio: "LGS ve YKS Matematik alanında uzman. Sezgisel öğretim yöntemiyle öğrencilerin matematiği sevmesini sağlar.",
  },
  {
    id: "2",
    name: "Mehmet Demir",
    subject: "Türkçe & Edebiyat",
    experience: 12,
    rating: 4.8,
    reviewCount: 98,
    bio: "Türk Dili ve Edebiyatı mezunu. Okuduğunu anlama ve yazılı anlatım becerisi geliştirme konusunda deneyimli.",
  },
  {
    id: "3",
    name: "Zeynep Arslan",
    subject: "İngilizce",
    experience: 6,
    rating: 4.7,
    reviewCount: 87,
    bio: "Cambridge sertifikalı İngilizce öğretmeni. Konuşma odaklı, pratik ve eğlenceli dersler.",
  },
];

export const mockUpcomingLessons: Lesson[] = [
  {
    id: "1",
    teacherName: "Ayşe Kaya",
    subject: "Matematik",
    date: "23 Mayıs 2026",
    time: "15:00",
    duration: 60,
    status: "upcoming",
  },
  {
    id: "2",
    teacherName: "Zeynep Arslan",
    subject: "İngilizce",
    date: "25 Mayıs 2026",
    time: "17:30",
    duration: 45,
    status: "upcoming",
  },
];

export const mockPastLessons: Lesson[] = [
  {
    id: "3",
    teacherName: "Ayşe Kaya",
    subject: "Matematik",
    date: "18 Mayıs 2026",
    time: "15:00",
    duration: 60,
    status: "completed",
  },
  {
    id: "4",
    teacherName: "Mehmet Demir",
    subject: "Türkçe",
    date: "15 Mayıs 2026",
    time: "14:00",
    duration: 60,
    status: "completed",
  },
  {
    id: "5",
    teacherName: "Zeynep Arslan",
    subject: "İngilizce",
    date: "12 Mayıs 2026",
    time: "16:00",
    duration: 45,
    status: "cancelled",
  },
];

export const mockMessages: Message[] = [
  {
    id: "1",
    senderName: "Ayşe Kaya",
    preview: "Bir sonraki derste türev konusuna başlayacağız. Hazırlık için...",
    time: "10:42",
    unread: true,
  },
  {
    id: "2",
    senderName: "Teneffüs Destek",
    preview: "Paketiniz 5 Haziran'da yenilenecek. Herhangi bir sorunuz varsa...",
    time: "Dün",
    unread: false,
  },
  {
    id: "3",
    senderName: "Mehmet Demir",
    preview: "Yazılı anlatım ödevinizi inceledim, genel olarak çok başarılı...",
    time: "19 May",
    unread: false,
  },
];

export const mockStudent: Student = {
  id: "1",
  name: "Ali Yılmaz",
  email: "ali.yilmaz@example.com",
  packageName: "Standart Paket",
  totalLessons: 20,
  usedLessons: 8,
  remainingLessons: 12,
};
