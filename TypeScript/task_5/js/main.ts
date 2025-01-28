// Define the interfaces MajorCredits and MinorCredits
interface MajorCredits {
    credits: number;
    // Unique brand to identify MajorCredits
    brand: "MajorCredits";
  }
  
  interface MinorCredits {
    credits: number;
    // Unique brand to identify MinorCredits
    brand: "MinorCredits";
  }
  
  // Define the functions to sum MajorCredits and MinorCredits
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: "MajorCredits",
    };
  }
  
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: "MinorCredits",
    };
  }

  // Example usage
  const majorSubject1: MajorCredits = { credits: 30, brand: "MajorCredits" };
  const majorSubject2: MajorCredits = { credits: 40, brand: "MajorCredits" };

  const minorSubject1: MinorCredits = { credits: 10, brand: "MinorCredits" };
  const minorSubject2: MinorCredits = { credits: 20, brand: "MinorCredits" };

  const totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
  const totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);

  console.log("Total Major Credits:", totalMajorCredits);
  console.log("Total Minor Credits:", totalMinorCredits);
