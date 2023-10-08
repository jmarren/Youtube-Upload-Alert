const getYoutubeData = require("./youtube-api");
const sendText = require("./twilio");

let previousUploadsFireship = [];
let previousUploadsDreading = [];
let previousUploadsPenguinz0 = [];
const penguinz0Id = "UCq6VFHwMzcMXbuKyG7SQYIg";

function handleChanges(changesString) {
  sendText(changesString);
  console.log("Detected changes:", changesString);
}

/// Dreading
setInterval(async () => {
  const channelId = "UCG-qQe1mnh4JVKhuJkdh8KA";
  const currentUploads = await getYoutubeData(channelId);

  const changes = currentUploads.filter((currentUpload) => {
    // Find if this upload was in the previous data
    const previousUpload = previousUploadsDreading.find(
      (prev) =>
        prev.title === currentUpload.title &&
        prev.publishedAt === currentUpload.publishedAt
    );

    // If not found in previous data, it's a new or changed item
    return !previousUpload;
  });

  if (changes.length > 0) {
    // Extract the titles of the changes and join them into a single string
    let changesString = changes.map((change) => change.title).join(", ");
    changesString =
      "dreading (crime and psycholdogy) posted a new video: ".concat(
        changesString
      );
    handleChanges(changesString);
  }

  // Update the previous uploads to the current data for the next run
  previousUploadsDreading = currentUploads;
}, 1800000);
// }, 1000);

///// Fireship

setInterval(async () => {
  const channelId = "UCsBjURrPoezykLs9EqgamOA";
  const currentUploads = await getYoutubeData(channelId);

  const changes = currentUploads.filter((currentUpload) => {
    // Find if this upload was in the previous data
    const previousUpload = previousUploadsFireship.find(
      (prev) =>
        prev.title === currentUpload.title &&
        prev.publishedAt === currentUpload.publishedAt
    );

    // If not found in previous data, it's a new or changed item
    return !previousUpload;
  });

  if (changes.length > 0) {
    // Extract the titles of the changes and join them into a single string
    let changesString = changes.map((change) => change.title).join(", ");
    changesString = "Fireship posted a new video: ".concat(changesString);
    handleChanges(changesString);
  }

  // Update the previous uploads to the current data for the next run
  previousUploadsFireship = currentUploads;
}, 1800000);
// }, 1000);

/// Penguinz0
setInterval(async () => {
  const channelId = penguinz0Id;
  const currentUploads = await getYoutubeData(channelId);

  const changes = currentUploads.filter((currentUpload) => {
    // Find if this upload was in the previous data
    const previousUpload = previousUploadsPenguinz0.find(
      (prev) =>
        prev.title === currentUpload.title &&
        prev.publishedAt === currentUpload.publishedAt
    );

    // If not found in previous data, it's a new or changed item
    return !previousUpload;
  });

  if (changes.length > 0) {
    // Extract the titles of the changes and join them into a single string
    let changesString = changes.map((change) => change.title).join(", ");
    changesString = "Fireship posted a new video: ".concat(changesString);
    handleChanges(changesString);
  }

  // Update the previous uploads to the current data for the next run
  previousUploadsPenguinz0 = currentUploads;
}, 1800000);
