import React from 'react';

const About = () => {
  const styles = {
    container: {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6',
      backgroundColor: 'var(--background-color, #85d17b)',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      maxWidth: '1000px',
      margin: '0 auto',
      textAlign: 'center',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    heading: {
      fontSize: '2rem',
      color: 'var(--heading-color, #333)',
      marginBottom: '10px',
    },
    paragraph: {
      fontSize: '1rem',
      color: 'var(--text-color, #555)',
    },
  };

  return (
    <section style={styles.container} aria-labelledby="about-heading">
      <h1 id="about-heading" style={styles.heading}>
        Welcome to BookHaven
      </h1>
      <p style={styles.paragraph}>
        Bookhaven is your ultimate destination for discovering, exploring, and sharing your love for books. 
        Whether you're a casual reader or a passionate bibliophile, we provide a platform where you can find 
        your next great read, connect with fellow book lovers, and dive into a world of literary adventures.
      </p>
      <p style={styles.paragraph}>
        Our mission is to create a haven for book enthusiasts, offering personalized recommendations, 
        insightful reviews, and a vibrant community to celebrate the joy of reading. Join us and embark 
        on a journey through the pages of countless stories waiting to be discovered.
      </p>
      <p style={styles.paragraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea distinctio culpa quisquam impedit tenetur. Nobis alias eveniet consequuntur laudantium ipsa repellendus corporis magnam maiores, quaerat repellat perspiciatis optio provident aliquid nihil molestias ea ipsam labore deleniti officia! Eius aperiam laboriosam ullam libero, dolorum assumenda perspiciatis pariatur nihil quam molestias eveniet exercitationem cum distinctio minima illo quae animi. Veritatis, voluptatem excepturi quasi quos voluptas at inventore expedita explicabo facilis ad, dicta veniam iure esse quae nemo aliquid earum molestiae placeat quaerat.
      </p>
    </section>
  );
};

export default About;