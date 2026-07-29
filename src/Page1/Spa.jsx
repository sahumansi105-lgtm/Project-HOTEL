import React from "react";

function Spa() {

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "50px 80px",
      gap: "40px",
      flexWrap: "wrap",
      marginBottom: "60px",
    },
    image: {
      width: "100%",
      maxWidth: "550px",
      borderRadius: "12px",
      objectFit: "cover",
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
    },
    textSection: {
      maxWidth: "480px",
    },
    heading: {
      fontSize: "32px",
      color: "#cfa35a",
      marginBottom: "15px",
    },
    paragraph: {
      fontSize: "18px",
      lineHeight: "1.6",
      color: "#ebe4e4ff",
    }
  };

  return (
    <div style={styles.container}>

      <img 
        src="/spa.jpg"     // put your spa image inside public folder 
        style={styles.image} 
        alt="Spa Services" 
      />

      <div style={styles.textSection}>
        <h2 style={styles.heading}>Spa & Wellness</h2>
        <p style={styles.paragraph}>
          Relax and rejuvenate with our soothing spa therapies inspired by 
          traditional Rajasthani wellness techniques. Enjoy massages, body 
          treatments, and calming aromatherapy in a peaceful environment.
        </p>
      </div>

    </div>
  );
}

export default Spa;

