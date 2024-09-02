# Job Search Website

This website is built with Next.js and TypeScript, featuring a user-friendly platform for job searching, profile management, and tracking favorite positions.

## Links
- [Front-end part](https://iteamtest.vercel.app/)
- [Front-end repository](https://github.com/atryknaav/iteamtest)
- [Back-end part](https://iteamtest-server.onrender.com) (can be tested with **`/login`** and **`/register`** routes)
- [Back-end repository](https://github.com/atryknaav/iteamtest-server)
## Libraries Used

### Front-End:
- **`axios`**: For making HTTP requests.
- **`dotenv`**: For managing environment variables.
- **`formik`**: For handling form state and validation.
- **`swr`**: For data fetching and caching.

### Back-End:
- **`express.js`**: For building the server and handling routes.
- **`jwt`**: For JSON Web Token authentication and authorization.

## Common Header

The header is present on all pages and includes the following buttons:

### 1. Search Button
- **Redirects to:** `/jobs`
- **Functionality:** 
  - Navigates users to the job search page.
  - If a profile is created, users can search for jobs and receive a list of recommended positions based on their profile details.

### 2. Heart Button
- **Redirects to:** `/liked`
- **Functionality:** 
  - Displays a list of jobs the user has liked.
  - Users can like a job by clicking the heart button on job listings. The liked jobs are saved and accessible from this page.

### 3. User Icon
- **Redirects to:** `/create-profile`
- **Functionality:**
  - Allows users to create or edit their profile.
  - Fields to be filled include:
    - Name
    - Desired Job
    - About Me
  - Profile details are stored in local storage and used to suggest jobs on the `/jobs` page.
  - If a profile exists, users can view their profile description and have the option to edit it.

## Job Search Page (`/jobs`)

- **Search Functionality:**
  - Users can search for jobs.
  - If a profile is created, suggested jobs based on the profile details are displayed. The list of suggested jobs disappears once a user performs a search.
  
- **Job Listings:**
  - Shows job listings based on the search query and profile suggestions.

## Liked Jobs Page (`/liked`)

- **Functionality:**
  - Displays a list of jobs that the user has liked.
  - Users can like or unlike jobs directly from this page.

## Job Detail Page (`/job-detail/[id]`)

- **Functionality:**
  - Provides detailed information about a specific job.
  - Includes comprehensive data about the job, even minor details.

## Main Page

- **Redirect Button:**
  - Includes a button that redirects users to the `/jobs` page.


## Note on Backend Integration

- The front-end does not yet integrate with the server due to request issues. While the back-end is functional, it is not fully connected to the front-end at this stage.
