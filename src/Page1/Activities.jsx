import React from "react"

function Activities() {
  
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
      color: "#f1eaeaff",
      
    }
  };

  return (
    <div>
    <div style={styles.container}>

      <div style={styles.image}
      />

      <div style={styles.textSection}>
        <h2 style={styles.heading}>Activities</h2>
        <p style={styles.paragraph}>
          Enjoy memorable experiences at our hotel — Desert Safari, Camel Ride,Jeep Adventure, Cultural Dance Nights, and many more activities that
          bring the vibrant spirit of Jaisalmer to life.
        </p>
      </div>
    </div>

      <div style={styles.container}>
        <img src="/camel ride.jpg" style={styles.image} alt="Camel Ride" />
        <div style={styles.textSection}>
          <h2 style={styles.heading}>Camel Ride</h2>
          <p style={styles.paragraph}>
            Experience the traditional camel ride during sunset and explore the
            calm and beauty of the Thar Desert.
          </p>
        </div>
      </div>

        <div style={styles.container}>
        <img src="/jeep.jpg" style={styles.image} alt="Camel Ride" />
        <div style={styles.textSection}>
          <h2 style={styles.heading}>Jeep Adventure</h2>
          <p style={styles.paragraph}>
            Experience the traditional camel ride during sunset and explore the
            calm and beauty of the Thar Desert.
          </p>
        </div>
      </div>

            <div style={styles.container}>
        <img src="/dance.jpg" style={styles.image} alt="Camel Ride" />
        <div style={styles.textSection}>
          <h2 style={styles.heading}>Cultural Dance Nights</h2>
          <p style={styles.paragraph}>
            Experience the traditional camel ride during sunset and explore the
            calm and beauty of the Thar Desert.
          </p>
        </div>
      </div>
    

    </div>
  );
}

export default Activities;

