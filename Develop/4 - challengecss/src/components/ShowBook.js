import styles from './ShowBooks.module.css';

const ShowBook = () => {

  let books = [{ title: "Quem pensa enriquece", author: "charles", date: "10/10/2010" },
  { title: "As 20 leis do triunfo", author: "da20", date: "11/11/2011" },
  { title: "Mais esperto que o diabo", author: "Rei Jão", date: "12/12/2012" }
  ,{ title: "Mais esperto que o diabo", author: "Rei Jão", date: "12/12/2012" }];

  return (
    <div className={styles.container}>

      {books.map((book) => (
        <ul className={styles.card}>
          <img src="https://static.vecteezy.com/ti/fotos-gratis/t2/3534145-leia-livros-para-aumentar-conhecimento-foto.jpg" alt="" height="50px" width="100px" />
          <li>Title: {book.title}</li>
          <li>Author: {book.author}</li>
          <li>Date: {book.date}</li>
        </ul>
      ))}

    </div >
  )
};

export default ShowBook;