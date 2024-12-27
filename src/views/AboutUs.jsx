import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <div className={styles.runningCatBackground}>
      <img
        src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" // Running cat GIF
        alt="Running Cat"
        className={styles.catAnimation}
      />
      <div className={styles.aboutUsContainer}>
        <h2 className={styles.header}>About Us</h2>

        {/* Mission Section */}
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Our Mission</h3>
          <p className={styles.sectionText}>To bring joy and companionship to people's lives by connecting them with loving cats.</p>
        </section>

        {/* History Section */}
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Our History</h3>
          <p className={styles.sectionText}>
            We were founded with a vision to create a better world for cats and the humans who love them. We believe in responsible pet ownership and strive to find the perfect feline match for every
            individual or family.
          </p>
        </section>

        {/* Team Section */}
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Our Team</h3>
          <div className={styles.teamRow}>
            {[1, 2, 3].map((_, index) => (
              <div key={index} className={styles.teamCard}>
                <div className={styles.profilePicture}>RS</div>
                <h5 className={styles.teamName}>MD Rafiul Siddique</h5>
                <p className={styles.teamRole}>Director</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
