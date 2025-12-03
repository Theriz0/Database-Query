// Students majoring in IS, grouped by city and state
db.Student.aggregate([
  {
    $match: { StdMajor: "IS" }
  },
  {
    $group: {
      _id: {
        StdCity: "$StdAddress.StdCity",
        StdState: "$StdAddress.StdState"
      }
    }
  }
])

// Offerings for FIN courses in Winter 2020
db.Offering.find(
  {
    CourseNo: /^FIN/,
    "TermYear.OffTerm": "WINTER",
    "TermYear.OffYear": 2020
  }
)

// Students who are either JR in Seattle or SO in Bothell
db.Student.find(
  {
    $or: [
      { StdClass: "JR", "StdAddress.StdCity": "SEATTLE" },
      { StdClass: "SO", "StdAddress.StdCity": "BOTHELL" }
    ]
  },
  {
    _id: 1,
    StdName: 1,
    StdMajor: 1
  }
)

// Students not FR/SO with GPA > 3.5
db.Student.find(
  {
    StdClass: { $nin: ["FR", "SO"] },
    StdGPA: { $gt: 3.5 }
  },
  {
    _id: 1,
    StdName: 1,
    StdGPA: 1
  }
)

// Number of faculty in Seattle, WA
db.Faculty.aggregate([
  {
    $match: {
      "FacAddress.FacCity": "SEATTLE",
      "FacAddress.FacState": "WA"
    }
  },
  {
    $count: "NoOfFaculty"
  }
])

// Max GPA per major for JR and SR students
db.Student.aggregate([
  {
    $match: {
      StdClass: { $in: ["JR", "SR"] }
    }
  },
  {
    $group: {
      _id: "$StdMajor",
      MaxGPA: { $max: "$StdGPA" }
    }
  },
  {
    $sort: {
      _id: 1 // Optional: sort by major name
    }
  }
])

// Faculty with rank PROF or ASSC, group by department, filter by AvgSalary ≥ 80k
db.Faculty.aggregate([
  {
    $match: {
      FacRank: { $in: ["PROF", "ASSC"] }
    }
  },
  {
    $group: {
      _id: "$FacDept",
      MaxSalary: { $max: "$FacSalary" },
      AvgSalary: { $avg: "$FacSalary" }
    }
  },
  {
    $match: {
      AvgSalary: { $gte: 80000 }
    }
  },
  {
    $project: {
      _id: 1,
      MaxSalary: 1
      // AvgSalary is excluded automatically
    }
  }
])

// Offerings in Fall 2019 or Winter 2020
db.Offering.find(
  {
    $or: [
      { "TermYear.OffTerm": "FALL", "TermYear.OffYear": 2019 },
      { "TermYear.OffTerm": "WINTER", "TermYear.OffYear": 2020 }
    ]
  },
  {
    _id: 1,       // OfferNo
    CourseNo: 1,
    FacNo: 1
  }
)

// Faculty hired in 2005, 2006, or 2007
db.Faculty.aggregate([
  {
    $match: {
      $expr: {
        $in: [
          { $year: "$FacHireDate" },
          [2005, 2006, 2007]
        ]
      }
    }
  },
  {
    $project: {
      _id: 0,
      FacName: 1,
      FacDept: 1,
      FacHireDate: 1
    }
  }
])

// Students with ZIP starting with 9812, sorted by Major asc, GPA desc
db.Student.find(
  {
    "StdAddress.StdZip": /^9812/
  },
  {
    _id: 0,
    StdName: 1,
    "StdAddress.StdCity": 1,
    "StdAddress.StdState": 1,
    StdMajor: 1,
    StdGPA: 1
  }
).sort(
  {
    StdMajor: 1,
    StdGPA: -1
  }
)
