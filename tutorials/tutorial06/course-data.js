// https://meteor.unca.edu/registrar/class-schedules/api/v1/courses/2025/spring/
const courseList = [
    {
        CRN: 10150,
        Code: "CSCI 182.001",
        Department: "CSCI",
        Title: "Intro Programming: Media Applications",
        Instructors: [
            {
                Username: "awhitley",
                Name: "Whitley, Adam",
            },
        ],
        Hours: 3,
        Days: "MWF",
        StartTime: "2019-05-07T15:00:00Z",
        EndTime: "2019-05-07T16:15:00Z",
        Location: {
            FullLocation: "ZEI 203",
            Building: "ZEI",
            Room: "203",
        },
        EnrollmentCurrent: 15,
        EnrollmentMax: 22,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2025-01-13T05:00:00Z",
        EndDate: "2025-05-07T04:00:00Z",
        Classification: {
            AmericanDemocracy: false,
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: true,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 11199,
        Code: "CSCI 182.002",
        Department: "CSCI",
        Title: "Intro Programming: Media Applications",
        Instructors: [
            {
                Username: "awhitley",
                Name: "Whitley, Adam",
            },
        ],
        Hours: 3,
        Days: "MWF",
        StartTime: "2019-05-07T16:30:00Z",
        EndTime: "2019-05-07T17:45:00Z",
        Location: {
            FullLocation: "ZEI 203",
            Building: "ZEI",
            Room: "203",
        },
        EnrollmentCurrent: 16,
        EnrollmentMax: 22,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2025-01-13T05:00:00Z",
        EndDate: "2025-05-07T04:00:00Z",
        Classification: {
            AmericanDemocracy: false,
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: true,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 10387,
        Code: "CSCI 183.001",
        Department: "CSCI",
        Title: "Intro Programming: Numerical Applications",
        Instructors: [
            {
                Username: "msarris",
                Name: "Sarris, Michael",
            },
        ],
        Hours: 3,
        Days: "MWF",
        StartTime: "2019-05-07T18:00:00Z",
        EndTime: "2019-05-07T19:15:00Z",
        Location: {
            FullLocation: "ZEI 203",
            Building: "ZEI",
            Room: "203",
        },
        EnrollmentCurrent: 20,
        EnrollmentMax: 22,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2025-01-13T05:00:00Z",
        EndDate: "2025-05-07T04:00:00Z",
        Classification: {
            AmericanDemocracy: false,
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: true,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 10380,
        Code: "CSCI 185.001",
        Department: "CSCI",
        Title: "Intro Programming: Web Development",
        Instructors: [
            {
                Username: "frashid",
                Name: "Rashid, Farzana",
            },
        ],
        Hours: 3,
        Days: "TR",
        StartTime: "2019-05-07T13:55:00Z",
        EndTime: "2019-05-07T15:35:00Z",
        Location: {
            FullLocation: "WHI 008",
            Building: "WHI",
            Room: "008",
        },
        EnrollmentCurrent: 20,
        EnrollmentMax: 26,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2025-01-13T05:00:00Z",
        EndDate: "2025-05-07T04:00:00Z",
        Classification: {
            AmericanDemocracy: false,
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: true,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 10389,
        Code: "CSCI 201.001",
        Department: "CSCI",
        Title: "Intro to Object-Oriented Programming",
        Instructors: [
            {
                Username: "kbogert",
                Name: "Bogert, Kenneth",
            },
        ],
        Hours: 3,
        Days: "MWF",
        StartTime: "2019-05-07T15:00:00Z",
        EndTime: "2019-05-07T16:15:00Z",
        Location: {
            FullLocation: "WHI 008",
            Building: "WHI",
            Room: "008",
        },
        EnrollmentCurrent: 25,
        EnrollmentMax: 26,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2025-01-13T05:00:00Z",
        EndDate: "2025-05-07T04:00:00Z",
        Classification: {
            AmericanDemocracy: false,
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: true,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 10529,
        Code: "CSCI 201.002",
        Department: "CSCI",
        Title: "Intro to Object-Oriented Programming",
        Instructors: [
            {
                Username: "arashid",
                Name: "Rashid, Zubayr",
            },
        ],
        Hours: 3,
        Days: "MWF",
        StartTime: "2019-05-07T18:00:00Z",
        EndTime: "2019-05-07T19:15:00Z",
        Location: {
            FullLocation: "ZEI 201",
            Building: "ZEI",
            Room: "201",
        },
        EnrollmentCurrent: 21,
        EnrollmentMax: 22,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2025-01-13T05:00:00Z",
        EndDate: "2025-05-07T04:00:00Z",
        Classification: {
            AmericanDemocracy: false,
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: true,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 10151,
        Code: "CSCI 202.001",
        Department: "CSCI",
        Title: "Intro to Data Structures",
        Instructors: [
            {
                Username: "arashid",
                Name: "Rashid, Zubayr",
            },
        ],
        Hours: 3,
        Days: "MWF",
        StartTime: "2019-05-07T13:30:00Z",
        EndTime: "2019-05-07T14:45:00Z",
        Location: {
            FullLocation: "ZEI 201",
            Building: "ZEI",
            Room: "201",
        },
        EnrollmentCurrent: 23,
        EnrollmentMax: 23,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2025-01-13T05:00:00Z",
        EndDate: "2025-05-07T04:00:00Z",
        Classification: {
            AmericanDemocracy: false,
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: false,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 11201,
        Code: "CSCI 202.002",
        Department: "CSCI",
        Title: "Intro to Data Structures",
        Instructors: [
            {
                Username: "arashid",
                Name: "Rashid, Zubayr",
            },
        ],
        Hours: 3,
        Days: "MWF",
        StartTime: "2019-05-07T15:00:00Z",
        EndTime: "2019-05-07T16:15:00Z",
        Location: {
            FullLocation: "ZEI 201",
            Building: "ZEI",
            Room: "201",
        },
        EnrollmentCurrent: 22,
        EnrollmentMax: 23,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2025-01-13T05:00:00Z",
        EndDate: "2025-05-07T04:00:00Z",
        Classification: {
            AmericanDemocracy: false,
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: true,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 10390,
        Code: "CSCI 235.001",
        Department: "CSCI",
        Title: "Systems I",
        Instructors: [
            {
                Username: "ksanft",
                Name: "Sanft, Kevin",
            },
        ],
        Hours: 3,
        Days: "MWF",
        StartTime: "2019-05-07T12:00:00Z",
        EndTime: "2019-05-07T13:15:00Z",
        Location: {
            FullLocation: "WHI 008",
            Building: "WHI",
            Room: "008",
        },
        EnrollmentCurrent: 31,
        EnrollmentMax: 30,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2025-01-13T05:00:00Z",
        EndDate: "2025-05-07T04:00:00Z",
        Classification: {
            AmericanDemocracy: false,
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: false,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 10388,
        Code: "CSCI 280.001",
        Department: "CSCI",
        Title: "Computer Science Seminar",
        Instructors: [
            {
                Username: "svanwart",
                Name: "Van Wart, Sarah",
            },
        ],
        Hours: 1,
        Days: "M",
        StartTime: "2019-05-07T18:00:00Z",
        EndTime: "2019-05-07T19:15:00Z",
        Location: {
            FullLocation: "RRO 217",
            Building: "RRO",
            Room: "217",
        },
        EnrollmentCurrent: 24,
        EnrollmentMax: 25,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2025-01-13T05:00:00Z",
        EndDate: "2025-05-07T04:00:00Z",
        Classification: {
            AmericanDemocracy: false,
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: true,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 10419,
        Code: "CSCI 313.001",
        Department: "CSCI",
        Title: "Virtual Reality",
        Instructors: [
            {
                Username: "kbogert",
                Name: "Bogert, Kenneth",
            },
        ],
        Hours: 4,
        Days: "TR",
        StartTime: "2019-05-07T13:55:00Z",
        EndTime: "2019-05-07T15:35:00Z",
        Location: {
            FullLocation: "KAR 037",
            Building: "KAR",
            Room: "037",
        },
        EnrollmentCurrent: 14,
        EnrollmentMax: 14,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2025-01-13T05:00:00Z",
        EndDate: "2025-05-07T04:00:00Z",
        Classification: {
            AmericanDemocracy: false,
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: false,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 10717,
        Code: "CSCI 333.001",
        Department: "CSCI",
        Title: "Algorithms",
        Instructors: [
            {
                Username: "awhitley",
                Name: "Whitley, Adam",
            },
        ],
        Hours: 3,
        Days: "MWF",
        StartTime: "2019-05-07T19:30:00Z",
        EndTime: "2019-05-07T20:45:00Z",
        Location: {
            FullLocation: "ZEI 203",
            Building: "ZEI",
            Room: "203",
        },
        EnrollmentCurrent: 16,
        EnrollmentMax: 22,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2025-01-13T05:00:00Z",
        EndDate: "2025-05-07T04:00:00Z",
        Classification: {
            AmericanDemocracy: false,
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: true,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 10391,
        Code: "CSCI 338.001",
        Department: "CSCI",
        Title: "Software Engineering",
        Instructors: [
            {
                Username: "svanwart",
                Name: "Van Wart, Sarah",
            },
        ],
        Hours: 3,
        Days: "TR",
        StartTime: "2019-05-07T19:15:00Z",
        EndTime: "2019-05-07T20:55:00Z",
        Location: {
            FullLocation: "RRO 217",
            Building: "RRO",
            Room: "217",
        },
        EnrollmentCurrent: 27,
        EnrollmentMax: 25,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2025-01-13T05:00:00Z",
        EndDate: "2025-05-07T04:00:00Z",
        Classification: {
            AmericanDemocracy: false,
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: false,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 10320,
        Code: "CSCI 344.001",
        Department: "CSCI",
        Title: "Advanced Web Technology",
        Instructors: [
            {
                Username: "svanwart",
                Name: "Van Wart, Sarah",
            },
        ],
        Hours: 3,
        Days: "MWF",
        StartTime: "2019-05-07T16:30:00Z",
        EndTime: "2019-05-07T17:45:00Z",
        Location: {
            FullLocation: "WHI 008",
            Building: "WHI",
            Room: "008",
        },
        EnrollmentCurrent: 26,
        EnrollmentMax: 25,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2025-01-13T05:00:00Z",
        EndDate: "2025-05-07T04:00:00Z",
        Classification: {
            AmericanDemocracy: false,
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: false,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 11200,
        Code: "CSCI 347.001",
        Department: "CSCI",
        Title: "Game Programming",
        Instructors: [
            {
                Username: "msarris",
                Name: "Sarris, Michael",
            },
        ],
        Hours: 3,
        Days: "TR",
        StartTime: "2019-05-07T12:00:00Z",
        EndTime: "2019-05-07T13:40:00Z",
        Location: {
            FullLocation: "KAR 037",
            Building: "KAR",
            Room: "037",
        },
        EnrollmentCurrent: 24,
        EnrollmentMax: 24,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2025-01-13T05:00:00Z",
        EndDate: "2025-05-07T04:00:00Z",
        Classification: {
            AmericanDemocracy: false,
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: false,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 10616,
        Code: "CSCI 364.001",
        Department: "CSCI",
        Title: "Cybersecurity",
        Instructors: [
            {
                Username: "msarris",
                Name: "Sarris, Michael",
            },
        ],
        Hours: 3,
        Days: "TR",
        StartTime: "2019-05-07T17:20:00Z",
        EndTime: "2019-05-07T19:00:00Z",
        Location: {
            FullLocation: "ZEI 201",
            Building: "ZEI",
            Room: "201",
        },
        EnrollmentCurrent: 24,
        EnrollmentMax: 24,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2025-01-13T05:00:00Z",
        EndDate: "2025-05-07T04:00:00Z",
        Classification: {
            AmericanDemocracy: false,
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: false,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 10386,
        Code: "CSCI 431.001",
        Department: "CSCI",
        Title: "Org of Programming Languages",
        Instructors: [
            {
                Username: "frashid",
                Name: "Rashid, Farzana",
            },
        ],
        Hours: 3,
        Days: "MWF",
        StartTime: "2019-05-07T13:30:00Z",
        EndTime: "2019-05-07T14:45:00Z",
        Location: {
            FullLocation: "ZEI 203",
            Building: "ZEI",
            Room: "203",
        },
        EnrollmentCurrent: 8,
        EnrollmentMax: 20,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2025-01-13T05:00:00Z",
        EndDate: "2025-05-07T04:00:00Z",
        Classification: {
            AmericanDemocracy: false,
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: true,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 11195,
        Code: "CSCI 441.001",
        Department: "CSCI",
        Title: "Numerical Analysis",
        Instructors: [
            {
                Username: "bsanft",
                Name: "Sanft, Becky",
            },
        ],
        Hours: 3,
        Days: "MW",
        StartTime: "2019-05-07T13:30:00Z",
        EndTime: "2019-05-07T14:45:00Z",
        Location: {
            FullLocation: "RRO 211",
            Building: "RRO",
            Room: "211",
        },
        EnrollmentCurrent: 11,
        EnrollmentMax: 10,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2025-01-13T05:00:00Z",
        EndDate: "2025-05-07T04:00:00Z",
        Classification: {
            AmericanDemocracy: false,
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: false,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 10403,
        Code: "CSCI 480.001",
        Department: "CSCI",
        Title: "Capstone I",
        Instructors: [
            {
                Username: "svanwart",
                Name: "Van Wart, Sarah",
            },
        ],
        Hours: 2,
        Days: "WF",
        StartTime: "2019-05-07T18:00:00Z",
        EndTime: "2019-05-07T19:15:00Z",
        Location: {
            FullLocation: "RRO 217",
            Building: "RRO",
            Room: "217",
        },
        EnrollmentCurrent: 11,
        EnrollmentMax: 20,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2025-01-13T05:00:00Z",
        EndDate: "2025-05-07T04:00:00Z",
        Classification: {
            AmericanDemocracy: false,
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: true,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 10420,
        Code: "CSCI 481.001",
        Department: "CSCI",
        Title: "Capstone II",
        Instructors: [
            {
                Username: "kbogert",
                Name: "Bogert, Kenneth",
            },
        ],
        Hours: 2,
        Days: "MF",
        StartTime: "2019-05-07T12:00:00Z",
        EndTime: "2019-05-07T13:15:00Z",
        Location: {
            FullLocation: "ZEI 203",
            Building: "ZEI",
            Room: "203",
        },
        EnrollmentCurrent: 6,
        EnrollmentMax: 15,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2025-01-13T05:00:00Z",
        EndDate: "2025-05-07T04:00:00Z",
        Classification: {
            AmericanDemocracy: false,
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: true,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 10577,
        Code: "CSCI 481.002",
        Department: "CSCI",
        Title: "Capstone II",
        Instructors: [
            {
                Username: "kbogert",
                Name: "Bogert, Kenneth",
            },
        ],
        Hours: 2,
        Days: "WF",
        StartTime: "2019-05-07T12:00:00Z",
        EndTime: "2019-05-07T13:15:00Z",
        Location: {
            FullLocation: "ZEI 203",
            Building: "ZEI",
            Room: "203",
        },
        EnrollmentCurrent: 11,
        EnrollmentMax: 15,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2025-01-13T05:00:00Z",
        EndDate: "2025-05-07T04:00:00Z",
        Classification: {
            AmericanDemocracy: false,
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: true,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 10245,
        Code: "CSCI 499.001",
        Department: "CSCI",
        Title: "UGR in CSCI: TBA *Permission of Instructor Required",
        Instructors: [
            {
                Username: "frashid",
                Name: "Rashid, Farzana",
            },
        ],
        Hours: 3,
        Days: null,
        StartTime: null,
        EndTime: null,
        Location: {
            FullLocation: null,
            Building: null,
            Room: null,
        },
        EnrollmentCurrent: 0,
        EnrollmentMax: 5,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2025-01-13T05:00:00Z",
        EndDate: "2025-05-07T04:00:00Z",
        Classification: {
            AmericanDemocracy: false,
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: true,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 10268,
        Code: "CSCI 499.002",
        Department: "CSCI",
        Title: "UGR in CSCI: TBA  *Permission of Instructor Required",
        Instructors: [
            {
                Username: "svanwart",
                Name: "Van Wart, Sarah",
            },
        ],
        Hours: 3,
        Days: null,
        StartTime: null,
        EndTime: null,
        Location: {
            FullLocation: null,
            Building: null,
            Room: null,
        },
        EnrollmentCurrent: 0,
        EnrollmentMax: 5,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2025-01-13T05:00:00Z",
        EndDate: "2025-05-07T04:00:00Z",
        Classification: {
            AmericanDemocracy: false,
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: true,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 10855,
        Code: "CSCI 499.003",
        Department: "CSCI",
        Title: "UGR in CSCI: Data Analytics *Permission of Instructor Required",
        Instructors: [
            {
                Username: "ksanft",
                Name: "Sanft, Kevin",
            },
        ],
        Hours: 3,
        Days: null,
        StartTime: null,
        EndTime: null,
        Location: {
            FullLocation: null,
            Building: null,
            Room: null,
        },
        EnrollmentCurrent: 1,
        EnrollmentMax: 5,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2025-01-13T05:00:00Z",
        EndDate: "2025-05-07T04:00:00Z",
        Classification: {
            AmericanDemocracy: false,
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: true,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 10659,
        Code: "CSCI 499.004",
        Department: "CSCI",
        Title: "UGR in CSCI: Game Development *Permission of Instructor Required",
        Instructors: [
            {
                Username: "awhitley",
                Name: "Whitley, Adam",
            },
        ],
        Hours: 3,
        Days: null,
        StartTime: null,
        EndTime: null,
        Location: {
            FullLocation: null,
            Building: null,
            Room: null,
        },
        EnrollmentCurrent: 2,
        EnrollmentMax: 5,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2025-01-13T05:00:00Z",
        EndDate: "2025-05-07T04:00:00Z",
        Classification: {
            AmericanDemocracy: false,
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: true,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 10660,
        Code: "CSCI 499.005",
        Department: "CSCI",
        Title: "UGR in CSCI: Generative AI *Permission of Instructor Required",
        Instructors: [
            {
                Username: "awhitley",
                Name: "Whitley, Adam",
            },
        ],
        Hours: 1,
        Days: null,
        StartTime: null,
        EndTime: null,
        Location: {
            FullLocation: null,
            Building: null,
            Room: null,
        },
        EnrollmentCurrent: 1,
        EnrollmentMax: 5,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2025-01-13T05:00:00Z",
        EndDate: "2025-05-07T04:00:00Z",
        Classification: {
            AmericanDemocracy: false,
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: true,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
];
