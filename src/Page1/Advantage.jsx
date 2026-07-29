import React from "react"

function Advantage() {
  
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "50px 80px",
      gap: "40px",
      flexWrap: "wrap",
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
      fontSize: "36px",
      color: "#cfa35a",
      marginBottom: "15px",
    },
    paragraph: {
      fontSize: "18px",
      lineHeight: "1.6",
      color: "#eae4e4ff",
    }
  };

  return (
    <div>
    <div style={styles.container}>

    </div>

      <div style={styles.container}>
        <img src="/a01.jpg" style={styles.image} alt="Camel Ride" />
        <div style={styles.textSection}>
          <h2 style={styles.heading}>Heritage & Royal Architecture</h2>
          <p style={styles.paragraph}>
            Experience the traditional camel ride during sunset and explore the
            calm and beauty of the Thar Desert.
          </p>
        </div>
      </div>

            <div style={styles.container}>
        <img src="/a02.jpg" style={styles.image} alt="Camel Ride" />
        <div style={styles.textSection}>
          <h2 style={styles.heading}>Rooftop Views of Jaisalmer Fort</h2>
          <p style={styles.paragraph}>
            Experience the traditional camel ride during sunset and explore the
            calm and beauty of the Thar Desert.
          </p>
        </div>
      </div>

            <div style={styles.container}>
        <img src="/a03.jpg" style={styles.image} alt="Camel Ride" />
        <div style={styles.textSection}>
          <h2 style={styles.heading}>Luxury Facilities</h2>
          <p style={styles.paragraph}>
            Experience the traditional camel ride during sunset and explore the
            calm and beauty of the Thar Desert.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Advantage;


