// global variables tracking the user's preferences:
let searchTerm = "";
let openOnly = false;

const search = (ev) => {
  ev.preventDefault(); // overrides default button action

  // Set user's preferences (global variables) from the DOM:
  searchTerm = document.querySelector("#search_term").value;
  openOnly = document.querySelector("#is_open").checked;

  // Invoke the show matching courses function
  showMatchingCourses();
};

// Part 1.1a
const isClassFull = (course) => {
  // modify this to accurately apply the filter:
  return course.EnrollmentCurrent >= course.EnrollmentMax;
};

// Part 1.1b
const doesTermMatch = (course) => {
  if (course.Title.toLowerCase().includes(searchTerm.toLowerCase())) return true;
  if (course.Code.toLowerCase().includes(searchTerm.toLowerCase())) return true;
  if (course.Instructors[0].Name.toLowerCase().includes(searchTerm.toLowerCase())) return true;
};

// Part 1.2
const dataToHTML = (course) => {
  let seatsAvailable = course.EnrollmentMax - course.EnrollmentCurrent;
  if (seatsAvailable < 0) seatsAvailable = 0;

  let status;
  if (isClassFull(course)) {
    status = `<i class="fa-solid fa-circle-xmark"></i> Closed`;
  } else {
    status = `<i class="fa-solid fa-circle-check"></i> Open`;
  }

  return `
        <section class="course">
            <h2> ${course.Code}: ${course.Title}</h2>
            <p>
                ${status} &bull; ${course.CRN} &bull; Seats Available: ${seatsAvailable}
            </p>
            <p>
                ${course.Days || "TBD"} &bull; ${course.Location.FullLocation || "TBD"} &bull; ${
    course.Hours
  } credit hour(s)
            </p>
            <p><strong>${course.Instructors[0].Name}</strong></p>
        </section>
    `;
};

// Part 2sarah
const showMatchingCourses = () => {
  console.log(`Search term: ${searchTerm}`);
  console.log(`Only show open classes: ${openOnly}`);
  console.log(`Course data:`, courseList);

  // output all of the matching courses to the screen:
  const container = document.querySelector(".courses");
  container.innerHTML = "";
  let matches = courseList.filter(doesTermMatch);

  if (openOnly) {
    matches = matches.filter((course) => !isClassFull(course));
  }

  if (matches.length === 0) {
    container.innerHTML = `<p>No matching courses found.</p>`;
    return;
  }
  matches.forEach((course) => {
    const snippet = dataToHTML(course);
    container.insertAdjacentHTML("beforeend", snippet);
  });
};
