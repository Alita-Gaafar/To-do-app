export default function Title({completed,title}) {
  return (
    <p
      className={`${
        completed && "line-through"
      } mb-2 text-lg capitalize leading-5 dark:text-white`}
    >
      {title}
    </p>
  );
}
