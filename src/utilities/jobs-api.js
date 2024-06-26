import sendRequest from "./send-requests";
const BASE_URL = "/api/jobs";

export function getJobForDetailsPage(jobId) {
  return sendRequest(`${BASE_URL}/job/${jobId}`);
}

export function getAppDetails(applicantId) {
  return sendRequest(`${BASE_URL}/applicants/${applicantId}`);
}

export function addApp(jobId, formData) {
  return sendRequest(
    `${BASE_URL}/application/${jobId}`,
    "POST",
    formData,
    true
  );
}

export function getAllJobsForBoard() {
  return sendRequest(`${BASE_URL}/board`);
}

export function getAllJobsForUser() {
  return sendRequest(`${BASE_URL}/myjobs`);
}

export function add(eventData) {
  return sendRequest(BASE_URL, "POST", eventData);
}

export function updateJob(jobId, jobData) {
  return sendRequest(`${BASE_URL}/${jobId}`, "PUT", jobData);
}

export function getJobForApplication(jobId) {
  return sendRequest(`${BASE_URL}/application/${jobId}`);
}
