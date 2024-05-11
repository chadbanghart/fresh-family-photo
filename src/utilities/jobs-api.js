import sendRequest from "./send-requests";
const BASE_URL = "/api/jobs";

export function getAllJobsForBoard() {
  return sendRequest(`${BASE_URL}/board`);
}

export function getAllJobsForUser() {
  return sendRequest(`${BASE_URL}/user`);
}

export function add(eventData) {
  return sendRequest(BASE_URL, "POST", eventData);
}

export function updateJob(jobId, jobData) {
  return sendRequest(`${BASE_URL}/${jobId}`, "PUT", jobData);
}
