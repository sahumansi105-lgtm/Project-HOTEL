import React from "react";

function Events() {
  const styles = {
    section: {
      padding: "50px 40px",
      textAlign: "center",
    },
    heading: {
      fontSize: "40px",
      color: "#cfa35a",
      marginBottom: "20px",
    },
    paragraph: {
      fontSize: "18px",
      color: "#f4f3f3ff",
      maxWidth: "700px",
      margin: "0 auto 40px auto",
      lineHeight: "1.6",
    },
    imagesContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "20px",
    },
    imageWrapper: {
      textAlign: "center",
    },
    image: {
      width: "400px",
      height: "300px",
      objectFit: "cover",
      borderRadius: "12px",
    },
    imageName: {
      marginTop: "8px",
      fontSize: "16px",
      color: "#cfa35a",
    },
  };

  return (
    <div style={styles.section}>
      <h2 style={styles.heading}>Our Events</h2>
      <p style={styles.paragraph}>
        From majestic forts to serene desert landscapes, enjoy breathtaking views 
        at every corner of our hotel. Each view is a memory to cherish.
      </p>

      <div style={styles.imagesContainer}>

        <div style={styles.imageWrapper}>
          <img src="/e1.jpg" alt="Mountain View" style={styles.image} />
          <div style={styles.imageName}>Weddings & Pre-Weddings</div>
        </div>

        <div style={styles.imageWrapper}>
          <img src="/e02.jpg" alt="Glass House View" style={styles.image} />
          <div style={styles.imageName}>Cultural Evenings</div>
        </div>

        <div style={styles.imageWrapper}>
          <img src="/e03.jpg" alt="Fort View" style={styles.image} />
          <div style={styles.imageName}>Desert Experiences</div>
        </div>

        <div style={styles.imageWrapper}>
          <img src="/e04.jpg" alt="Sunset View" style={styles.image} />
          <div style={styles.imageName}>Corporate Events</div>
        </div>

      </div>
    </div>
  );
}

export default Events;
