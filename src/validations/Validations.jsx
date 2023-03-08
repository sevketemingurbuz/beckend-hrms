import { object, string, number, date, InferType } from 'yup';

let contactSchema = object({
  firstName: string().required("İsim alanı boş olamaz"),
  lastName: string().required("Soy isim alanı boş olamaz"),
  
  email: string().email("Email formatında olmalıdır").required("Email alanı boş geçilemez"),
  
  password: string().required("Şifre alanı boş olamaz"),
  date: date().required("Tarih alanı boş olamaz").default(() => new Date()),
  identification: number().required("Kimlik alanı boş olamaz").positive().integer()
});

export default contactSchema;

age: number().required().positive().integer()
website: string().url().nullable()
createdOn: date().default(() => new Date()).min(10, "Metin alanı 10 ile 50 karakter arasında olmalıdır").max(50, "Metin alanı 10 ile 50 karakter arasında olmalıdır").required("Metin alanı boş geçilemez")