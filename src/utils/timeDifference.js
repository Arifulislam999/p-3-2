export const getTimeDifferenceFromNow = (givenTime) => {
  const currentTime = new Date();
  const targetTime = new Date(givenTime);
  const timeDifference = Math.abs(currentTime - targetTime) / 1000; // in seconds

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  for (const [interval, seconds] of Object.entries(intervals)) {
    const difference = Math.floor(timeDifference / seconds);

    if (difference >= 1) {
      return difference === 1
        ? `1 ${interval} ago`
        : `${difference} ${interval}s ago`;
    }
  }

  return "just now";
};

// Example usage:
// const givenTime = "2023-12-23T19:54:51.953Z"; // Replace this with your given time
// const timeDifference = getTimeDifferenceFromNow("2023-12-23T19:59:59.953Z");

// get the new Date() function in js
