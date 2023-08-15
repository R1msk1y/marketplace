import styles from "./feedback.module.scss";
import { useForm } from "react-hook-form";
const Feedback = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };
  return (
    <div>
      <h2 className={styles.feedBack_title}>Обратная связь</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.feedBack_form}>
        <input type="text" placeholder="Имя" />
        <input type="email" placeholder="Телефон" />
        <input type="tel" placeholder="Почта" />
        <textarea
          placeholder="Комментарий"
          className={styles.textArea}
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button className={styles.btn} type="submit">
          Отправить
        </button>
      </form>
    </div>
  );
};
export default Feedback;
