const fs = require('fs');
const path = require('path');

// Output directory for JSON files
const outputDir = path.join(__dirname, '..', 'public', 'bank', 'questions');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// All 50 questions extracted from sullivan math 51-100.pdf
const questions = [
  {
    questionId: "79354b8a",
    externalId: "79354b8a",
    section: "Math",
    prompt: "<p>A bank account was opened with an initial deposit. Over the next several months, regular deposits were made into this account, and there were no withdrawals made during this time. The graph of the function \\(f\\) shown, where \\(y = f(x)\\), estimates the account balance, in dollars, in this bank account \\(x\\) months since the initial deposit. To the nearest whole dollar, what is the amount of the initial deposit estimated by the graph?</p>",
    answer: {
      choices: null,
      correctChoice: null,
      correctAnswer: "20",
      style: "Free Response",
      rationale: "<p>The correct answer is \\(20\\). For the graph shown, the x-axis represents the time since the initial deposit, in months, and the y-axis represents the bank account balance, in dollars. The amount of the initial deposit is estimated by the y-coordinate of the point on the graph that represents \\(0\\) months since the initial deposit. Therefore, the amount of the initial deposit is estimated by the corresponding y-value for the point when \\(x = 0\\). When \\(x = 0\\), it is estimated that \\(y = 20\\). Thus, the amount of the initial deposit estimated by the graph, to the nearest whole dollar, is \\(20\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Easy"
    }
  },
  {
    questionId: "dbe098e2",
    externalId: "dbe098e2",
    section: "Math",
    prompt: "<p>Jay walks at a speed of \\(3\\) miles per hour and runs at a speed of \\(5\\) miles per hour. He walks for \\(w\\) hours and runs for \\(r\\) hours for a combined total of \\(14\\) miles. Which equation represents this situation?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\(3w + 5r = 14\\)</p>" },
        B: { body: "<p>\\(\\frac{1}{3}w + \\frac{1}{5}r = 14\\)</p>" },
        C: { body: "<p>\\(\\frac{1}{3}w + \\frac{1}{5}r = 112\\)</p>" },
        D: { body: "<p>\\(3w + 5r = 112\\)</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is correct. Since Jay walks at a speed of \\(3\\) miles per hour for \\(w\\) hours, Jay walks a total of \\(3w\\) miles. Since Jay runs at a speed of \\(5\\) miles per hour for \\(r\\) hours, Jay runs a total of \\(5r\\) miles. Therefore, the total number of miles Jay travels can be represented by \\(3w + 5r\\). Since the combined total number of miles is \\(14\\), the equation \\(3w + 5r = 14\\) represents this situation.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Easy"
    }
  },
  {
    questionId: "e40b7bdc",
    externalId: "e40b7bdc",
    section: "Math",
    prompt: "<p>Keenan made \\(32\\) cups of vegetable broth. Keenan then filled \\(x\\) small jars and \\(y\\) large jars with all the vegetable broth he made. The equation \\(3x + 5y = 32\\) represents this situation. Which is the best interpretation of \\(5y\\) in this context?</p>",
    answer: {
      choices: {
        A: { body: "<p>The number of large jars Keenan filled</p>" },
        B: { body: "<p>The number of small jars Keenan filled</p>" },
        C: { body: "<p>The total number of cups of vegetable broth in the large jars</p>" },
        D: { body: "<p>The total number of cups of vegetable broth in the small jars</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is correct. It's given that the equation \\(3x + 5y = 32\\) represents the situation where Keenan filled \\(x\\) small jars and \\(y\\) large jars with all the vegetable broth he made, which was \\(32\\) cups. Therefore, \\(3x\\) represents the total number of cups of vegetable broth in the small jars and \\(5y\\) represents the total number of cups of vegetable broth in the large jars.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Hard"
    }
  },
  {
    questionId: "a39e1c3b",
    externalId: "a39e1c3b",
    section: "Math",
    prompt: "<p>What is the slope of the graph of \\(y = \\frac{1}{4}(27x + 15) + 7x\\) in the xy-plane?</p>",
    answer: {
      choices: null,
      correctChoice: null,
      correctAnswer: "13.75",
      alternateAnswers: ["55/4"],
      style: "Free Response",
      rationale: "<p>The correct answer is \\(\\frac{55}{4}\\). In the xy-plane, the graph of an equation in the form \\(y = mx + b\\), where \\(m\\) and \\(b\\) are constants, has a slope of \\(m\\) and a y-intercept of \\((0, b)\\). Applying the distributive property to the right-hand side of the given equation yields \\(y = \\frac{27}{4}x + \\frac{15}{4} + 7x\\). Combining like terms yields \\(y = \\frac{55}{4}x + \\frac{15}{4}\\). This equation is in the form \\(y = mx + b\\), where \\(m = \\frac{55}{4}\\) and \\(b = \\frac{15}{4}\\). It follows that the slope of the graph of \\(y = \\frac{1}{4}(27x + 15) + 7x\\) in the xy-plane is \\(\\frac{55}{4}\\). Note that 55/4 and 13.75 are examples of ways to enter a correct answer.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Medium"
    }
  },
  {
    questionId: "dd381f21",
    externalId: "dd381f21",
    section: "Math",
    prompt: "<p>The function \\(f\\) is defined by \\(f(x) = 80 - 6x\\). What is the value of \\(f(7)\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\(13\\)</p>" },
        B: { body: "<p>\\(38\\)</p>" },
        C: { body: "<p>\\(74\\)</p>" },
        D: { body: "<p>\\(81\\)</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is correct. It's given that function \\(f\\) is defined by \\(f(x) = 80 - 6x\\). The value of \\(f(7)\\) can be found by substituting \\(7\\) for \\(x\\) in the given function, which yields \\(f(7) = 80 - 6(7)\\), or \\(f(7) = 80 - 42\\), which is equivalent to \\(f(7) = 38\\). Therefore, the value of \\(f(7)\\) is \\(38\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Easy"
    }
  },
  {
    questionId: "9fa4d469",
    externalId: "9fa4d469",
    section: "Math",
    prompt: "<p>\\(4x + 5 = 165\\)</p><p>What is the solution to the given equation?</p>",
    answer: {
      choices: null,
      correctChoice: null,
      correctAnswer: "40",
      style: "Free Response",
      rationale: "<p>The correct answer is \\(40\\). Subtracting \\(5\\) from both sides of the given equation yields \\(4x = 160\\). Dividing both sides of this equation by \\(4\\) yields \\(x = 40\\). Therefore, the solution to the given equation is \\(40\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in one variable",
      difficulty: "Easy"
    }
  },
  {
    questionId: "59872b80",
    externalId: "59872b80",
    section: "Math",
    prompt: "<p>The function \\(g\\) is defined by \\(g(x) = 10x + 8\\). What is the value of \\(g(x)\\) when \\(x = 8\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\(0\\)</p>" },
        B: { body: "<p>\\(8\\)</p>" },
        C: { body: "<p>\\(10\\)</p>" },
        D: { body: "<p>\\(88\\)</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. The value of \\(g(x)\\) when \\(x = 8\\) can be found by substituting \\(8\\) for \\(x\\) in the given equation \\(g(x) = 10x + 8\\). This yields \\(g(8) = 10(8) + 8\\), or \\(g(8) = 88\\). Therefore, when \\(x = 8\\), the value of \\(g(x)\\) is \\(88\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Easy"
    }
  },
  {
    questionId: "c130b16c",
    externalId: "c130b16c",
    section: "Math",
    prompt: "<p>\\(y = 6x + 18\\)</p><p>One of the equations in a system of two linear equations is given. The system has no solution. Which equation could be the second equation in the system?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\(-6x + y = 18\\)</p>" },
        B: { body: "<p>\\(-6x + y = 22\\)</p>" },
        C: { body: "<p>\\(-12x + y = 36\\)</p>" },
        D: { body: "<p>\\(-12x + y = 18\\)</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is correct. A system of two linear equations in two variables, \\(x\\) and \\(y\\), has no solution if the lines represented by the equations in the xy-plane are parallel and distinct. Lines represented by equations in standard form, \\(Ax + By = C\\) and \\(Dx + Ey = F\\), are parallel if the coefficients for \\(x\\) and \\(y\\) in one equation are proportional to the corresponding coefficients in the other equation, meaning \\(\\frac{D}{A} = \\frac{E}{B}\\); and the lines are distinct if the constants are not proportional, meaning \\(\\frac{F}{C}\\) is not equal to \\(\\frac{D}{A}\\) or \\(\\frac{E}{B}\\). The given equation, \\(y = 6x + 18\\), can be written in standard form by subtracting \\(6x\\) from both sides of the equation to yield \\(-6x + y = 18\\). Therefore, the given equation can be written in the form \\(Ax + By = C\\), where \\(A = -6\\), \\(B = 1\\), and \\(C = 18\\). The equation in choice B, \\(-6x + y = 22\\), is written in the form \\(Dx + Ey = F\\), where \\(D = -6\\), \\(E = 1\\), and \\(F = 22\\). Therefore, \\(\\frac{D}{A} = \\frac{-6}{-6}\\), which can be rewritten as \\(\\frac{D}{A} = 1\\); \\(\\frac{E}{B} = \\frac{1}{1}\\), which can be rewritten as \\(\\frac{E}{B} = 1\\); and \\(\\frac{F}{C} = \\frac{22}{18}\\), which can be rewritten as \\(\\frac{F}{C} = \\frac{11}{9}\\). Since \\(\\frac{D}{A} = 1\\), \\(\\frac{E}{B} = 1\\), and \\(\\frac{F}{C}\\) is not equal to \\(1\\), it follows that the given equation and the equation \\(-6x + y = 22\\) are parallel and distinct. Therefore, a system of two linear equations consisting of the given equation and the equation \\(-6x + y = 22\\) has no solution. Thus, the equation in choice B could be the second equation in the system.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Systems of two linear equations in two variables",
      difficulty: "Hard"
    }
  },
  {
    questionId: "208e8feb",
    externalId: "208e8feb",
    section: "Math",
    prompt: "<p>\\(w + 7 = 357\\)</p><p>What value of \\(w\\) is the solution to the given equation?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\(51\\)</p>" },
        B: { body: "<p>\\(350\\)</p>" },
        C: { body: "<p>\\(364\\)</p>" },
        D: { body: "<p>\\(3,577\\)</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is correct. Subtracting \\(7\\) from each side of the given equation yields \\(w = 350\\). Therefore, the value of \\(w\\) that is the solution to the given equation is \\(350\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in one variable",
      difficulty: "Easy"
    }
  },
  {
    questionId: "d2205c27",
    externalId: "d2205c27",
    section: "Math",
    prompt: "<p>For the linear function \\(f\\), \\(f(x) = x + b\\) is a constant. When \\(x = 0\\), \\(f(x) = 30\\). What is the value of \\(b\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\(-30\\)</p>" },
        B: { body: "<p>\\(-\\frac{1}{30}\\)</p>" },
        C: { body: "<p>\\(\\frac{1}{30}\\)</p>" },
        D: { body: "<p>\\(30\\)</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. It's given that when \\(x = 0\\), \\(f(x) = 30\\). Substituting \\(0\\) for \\(x\\) and \\(30\\) for \\(f(x)\\) in the given function yields \\(30 = 0 + b\\), or \\(30 = b\\). Therefore, the value of \\(b\\) is \\(30\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Easy"
    }
  },
  {
    questionId: "4452450d",
    externalId: "4452450d",
    section: "Math",
    prompt: "<p>\\(f(x) = 45x + 600\\)</p><p>The function \\(f\\) gives the monthly fee \\(f(x)\\), in dollars, a facility charges to keep \\(x\\) crates in storage. What is the monthly fee, in dollars, the facility charges to keep \\(50\\) crates in storage?</p>",
    answer: {
      choices: null,
      correctChoice: null,
      correctAnswer: "2850",
      style: "Free Response",
      rationale: "<p>The correct answer is \\(2,850\\). It's given that the function \\(f(x) = 45x + 600\\) gives the monthly fee, in dollars, a facility charges to keep \\(x\\) crates in storage. Substituting \\(50\\) for \\(x\\) in this function yields \\(f(50) = 45(50) + 600\\), or \\(f(50) = 2,850\\). Therefore, the monthly fee, in dollars, the facility charges to keep \\(50\\) crates in storage is \\(2,850\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Medium"
    }
  },
  {
    questionId: "551e171e",
    externalId: "551e171e",
    section: "Math",
    prompt: "<p>\\(x + 40 = 95\\)</p><p>What value of \\(x\\) is the solution to the given equation?</p>",
    answer: {
      choices: null,
      correctChoice: null,
      correctAnswer: "55",
      style: "Free Response",
      rationale: "<p>The correct answer is \\(55\\). Subtracting \\(40\\) from both sides of the given equation yields \\(x = 55\\). Therefore, the value of \\(x\\) is \\(55\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in one variable",
      difficulty: "Easy"
    }
  },
  {
    questionId: "2e5d2643",
    externalId: "2e5d2643",
    section: "Math",
    prompt: "<p>\\(f(x) = 8x + 4\\)</p><p>The function \\(f\\) gives the estimated height, in feet, of a willow tree \\(x\\) years after its height was first measured. Which statement is the best interpretation of \\(4\\) in this context?</p>",
    answer: {
      choices: {
        A: { body: "<p>The tree will be measured each year for \\(4\\) years.</p>" },
        B: { body: "<p>The tree is estimated to grow to a maximum height of \\(4\\) feet.</p>" },
        C: { body: "<p>The estimated height of the tree increased by \\(4\\) feet each year.</p>" },
        D: { body: "<p>The estimated height of the tree was \\(4\\) feet when it was first measured.</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. It's given that the function \\(f(x) = 8x + 4\\) gives the estimated height, in feet, of a willow tree \\(x\\) years after its height was first measured. For a function defined by an equation of the form \\(f(x) = mx + b\\), where \\(m\\) and \\(b\\) are constants, \\(b\\) represents the value of \\(f(x)\\) when \\(x = 0\\). It follows that in the given function, \\(4\\) represents the value of \\(f(x)\\) when \\(x = 0\\). Therefore, the best interpretation of \\(4\\) in this context is that the estimated height of the tree was \\(4\\) feet when it was first measured.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Easy"
    }
  },
  {
    questionId: "5e7991d4",
    externalId: "5e7991d4",
    section: "Math",
    prompt: "<p>\\((x - 2) - 4(y + 7) = 117\\)</p><p>\\((x - 2) + 4(y + 7) = 442\\)</p><p>The solution to the given system of equations is \\((x, y)\\). What is the value of \\(6(x - 2)\\)?</p>",
    answer: {
      choices: null,
      correctChoice: null,
      correctAnswer: "1677",
      style: "Free Response",
      rationale: "<p>The correct answer is \\(1,677\\). Adding the first equation to the second equation in the given system yields \\((x - 2) + (x - 2) + (-4)(y + 7) + 4(y + 7) = 117 + 442\\), or \\(2(x - 2) = 559\\). Multiplying both sides of this equation by \\(3\\) yields \\(6(x - 2) = 1,677\\). Therefore, the value of \\(6(x - 2)\\) is \\(1,677\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Systems of two linear equations in two variables",
      difficulty: "Hard"
    }
  },
  {
    questionId: "2ebd5e5b",
    externalId: "2ebd5e5b",
    section: "Math",
    prompt: "<p>\\(24x + y = 48\\)</p><p>\\(6x + y = 72\\)</p><p>The solution to the given system of equations is \\((x, y)\\). What is the value of \\(y\\)?</p>",
    answer: {
      choices: null,
      correctChoice: null,
      correctAnswer: "80",
      style: "Free Response",
      rationale: "<p>The correct answer is \\(80\\). Subtracting the second equation in the given system from the first equation yields \\((24x + y) - (6x + y) = 48 - 72\\), which is equivalent to \\(24x - 6x + y - y = -24\\), or \\(18x = -24\\). Dividing each side of this equation by \\(18\\) yields \\(6x = -8\\). Substituting \\(-8\\) for \\(6x\\) in the second equation yields \\(-8 + y = 72\\). Adding \\(8\\) to both sides of this equation yields \\(y = 80\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Systems of two linear equations in two variables",
      difficulty: "Hard"
    }
  },
  {
    questionId: "dfbe86a3",
    externalId: "dfbe86a3",
    section: "Math",
    prompt: "<p>Line \\(r\\) is defined by the equation \\(4x - 9y = 3\\). Line \\(s\\) is parallel to line \\(r\\) in the xy-plane. What is the slope of line \\(s\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\(\\frac{9}{4}\\)</p>" },
        B: { body: "<p>\\(\\frac{4}{9}\\)</p>" },
        C: { body: "<p>\\(-4\\)</p>" },
        D: { body: "<p>\\(-9\\)</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is correct. It's given that line \\(s\\) is parallel to line \\(r\\) in the xy-plane. This means that the slope of line \\(r\\) is equal to the slope of line \\(s\\). Line \\(r\\) is defined by the equation \\(4x - 9y = 3\\). This equation can be written in slope-intercept form \\(y = mx + b\\), where \\(m\\) represents the slope of the line and \\(b\\) represents the y-coordinate of the y-intercept of the line. Subtracting \\(4x\\) from both sides of the equation \\(4x - 9y = 3\\) yields \\(-9y = -4x + 3\\). Dividing both sides of this equation by \\(-9\\) yields \\(y = \\frac{4}{9}x - \\frac{1}{3}\\). Therefore, the slope of line \\(r\\) is \\(\\frac{4}{9}\\). Since parallel lines have equal slopes, the slope of line \\(s\\) is also \\(\\frac{4}{9}\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Medium"
    }
  },
  {
    questionId: "66b488d2",
    externalId: "66b488d2",
    section: "Math",
    prompt: "<p>\\(y = 2x + 10\\)</p><p>\\(y = 2x - 1\\)</p><p>At how many points do the graphs of the given equations intersect in the xy-plane?</p>",
    answer: {
      choices: {
        A: { body: "<p>Zero</p>" },
        B: { body: "<p>Exactly one</p>" },
        C: { body: "<p>Exactly two</p>" },
        D: { body: "<p>Infinitely many</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is correct. A system of two linear equations in two variables, \\(x\\) and \\(y\\), has zero points of intersection if the lines represented by the equations in the xy-plane are distinct and parallel. The graphs of two lines in the xy-plane represented by equations in slope-intercept form, \\(y = mx + b\\), are distinct if the y-coordinates of their y-intercepts, \\(b\\), are different and are parallel if their slopes, \\(m\\), are the same. For the two equations in the given system, \\(y = 2x + 10\\) and \\(y = 2x - 1\\), the values of \\(b\\) are \\(10\\) and \\(-1\\), respectively, and the values of \\(m\\) are both \\(2\\). Since the values of \\(b\\) are different, the graphs of these lines have different y-coordinates of the y-intercept and are distinct. Since the values of \\(m\\) are the same, the graphs of these lines have the same slope and are parallel. Therefore, the graphs of the given equations are lines that intersect at zero points in the xy-plane.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Systems of two linear equations in two variables",
      difficulty: "Medium"
    }
  },
  {
    questionId: "89ad6f07",
    externalId: "89ad6f07",
    section: "Math",
    prompt: "<p>\\(3x + 6 = 4y\\)</p><p>\\(3x + 4 = 2y\\)</p><p>The solution to the given system of equations is \\((x, y)\\). What is the value of \\(y\\)?</p>",
    answer: {
      choices: null,
      correctChoice: null,
      correctAnswer: "1",
      style: "Free Response",
      rationale: "<p>The correct answer is \\(1\\). Subtracting the second equation from the first equation in the given system of equations yields \\((3x - 3x) + (6 - 4) = 4y - 2y\\), which is equivalent to \\(0 + 2 = 2y\\), or \\(2 = 2y\\). Dividing each side of this equation by \\(2\\) yields \\(1 = y\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Systems of two linear equations in two variables",
      difficulty: "Medium"
    }
  },
  {
    questionId: "fe4d899b",
    externalId: "fe4d899b",
    section: "Math",
    prompt: "<p>For the linear function \\(f\\), the graph of \\(y = f(x)\\) in the xy-plane has a slope of \\(\\frac{1}{4}\\) and passes through the point \\((0, 5)\\). Which equation defines \\(f\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\(f(x) = \\frac{1}{4}x + 5\\)</p>" },
        B: { body: "<p>\\(f(x) = \\frac{1}{4}x + \\frac{1}{5}\\)</p>" },
        C: { body: "<p>\\(f(x) = \\frac{1}{4}x - \\frac{5}{4}\\)</p>" },
        D: { body: "<p>\\(f(x) = \\frac{1}{4}x - 5\\)</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is correct. An equation that defines a linear function \\(f\\) can be written in the form \\(f(x) = mx + b\\), where \\(m\\) is the slope of the graph of \\(y = f(x)\\) in the xy-plane and \\((0, b)\\) is the y-intercept of the graph. It's given that for the linear function \\(f\\), the graph of \\(y = f(x)\\) in the xy-plane has a slope of \\(\\frac{1}{4}\\). Therefore, \\(m = \\frac{1}{4}\\). It's also given that the graph of \\(y = f(x)\\) passes through the point \\((0, 5)\\). Therefore, the y-intercept of the graph is \\((0, 5)\\), and it follows that \\(b = 5\\). Substituting \\(\\frac{1}{4}\\) for \\(m\\) and \\(5\\) for \\(b\\) in the equation \\(f(x) = mx + b\\) yields \\(f(x) = \\frac{1}{4}x + 5\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Easy"
    }
  },
  {
    questionId: "635e58a2",
    externalId: "635e58a2",
    section: "Math",
    prompt: "<p>If \\(9(4 - 3x) + 2 = 8(4 - 3x) + 18\\), what is the value of \\(4 - 3x\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\(-16\\)</p>" },
        B: { body: "<p>\\(-4\\)</p>" },
        C: { body: "<p>\\(4\\)</p>" },
        D: { body: "<p>\\(16\\)</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. The value of \\(4 - 3x\\) can be found by isolating this expression in the given equation. Subtracting \\(2\\) from both sides of the given equation yields \\(9(4 - 3x) = 8(4 - 3x) + 16\\). Subtracting \\(8(4 - 3x)\\) from both sides of this equation yields \\(9(4 - 3x) - 8(4 - 3x) = 16\\), which gives \\(1(4 - 3x) = 16\\), or \\(4 - 3x = 16\\). Therefore, the value of \\(4 - 3x\\) is \\(16\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in one variable",
      difficulty: "Medium"
    }
  },
  {
    questionId: "d5e9c402",
    externalId: "d5e9c402",
    section: "Math",
    prompt: "<p>A line in the xy-plane has a slope of \\(-\\frac{1}{2}\\) and passes through the point \\((0, 3)\\). Which equation represents this line?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\(y = -\\frac{1}{2}x - 3\\)</p>" },
        B: { body: "<p>\\(y = -\\frac{1}{2}x + 3\\)</p>" },
        C: { body: "<p>\\(y = \\frac{1}{2}x - 3\\)</p>" },
        D: { body: "<p>\\(y = \\frac{1}{2}x + 3\\)</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is correct. A line in the xy-plane with a slope of \\(m\\) and a y-intercept of \\((0, b)\\) can be represented by the equation \\(y = mx + b\\). It's given that the line has a slope of \\(-\\frac{1}{2}\\). Therefore, \\(m = -\\frac{1}{2}\\). It's also given that the line passes through the point \\((0, 3)\\). Therefore, \\(b = 3\\). Substituting \\(-\\frac{1}{2}\\) for \\(m\\) and \\(3\\) for \\(b\\) in the equation \\(y = mx + b\\) yields \\(y = -\\frac{1}{2}x + 3\\). Therefore, the equation \\(y = -\\frac{1}{2}x + 3\\) represents this line.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Easy"
    }
  },
  {
    questionId: "8d876c45",
    externalId: "8d876c45",
    section: "Math",
    prompt: "<p>\\(2a + 8b = 198\\)</p><p>\\(2a + 4b = 98\\)</p><p>The solution to the given system of equations is \\((a, b)\\). What is the value of \\(b\\)?</p>",
    answer: {
      choices: null,
      correctChoice: null,
      correctAnswer: "25",
      style: "Free Response",
      rationale: "<p>The correct answer is \\(25\\). Subtracting the second equation from the first equation in the given system of equations yields \\((2a - 2a) + (8b - 4b) = 198 - 98\\), which is equivalent to \\(0 + 4b = 100\\), or \\(4b = 100\\). Dividing each side of this equation by \\(4\\) yields \\(b = 25\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Systems of two linear equations in two variables",
      difficulty: "Medium"
    }
  },
  {
    questionId: "6dc8c2cd",
    externalId: "6dc8c2cd",
    section: "Math",
    prompt: "<p>For a party, \\(50\\) dinner rolls are needed. Dinner rolls are sold in packages of \\(12\\). What is the minimum number of packages that should be bought for the party?</p>",
    answer: {
      choices: null,
      correctChoice: null,
      correctAnswer: "5",
      style: "Free Response",
      rationale: "<p>The correct answer is \\(5\\). Let \\(p\\) represent the number of packages of dinner rolls that should be bought for the party. It's given that dinner rolls are sold in packages of \\(12\\). Therefore, \\(12p\\) represents the number of dinner rolls that should be bought for the party. It's also given that \\(50\\) dinner rolls are needed; therefore, \\(12p \\geq 50\\). Dividing both sides of this inequality by \\(12\\) yields \\(p \\geq \\frac{50}{12}\\), or approximately \\(p \\geq 4.17\\). Since the number of packages of dinner rolls must be a whole number, the minimum number of packages that should be bought for the party is \\(5\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear inequalities in one or two variables",
      difficulty: "Easy"
    }
  },
  {
    questionId: "dcdceeae",
    externalId: "dcdceeae",
    section: "Math",
    prompt: "<p>In the xy-plane, line \\(p\\) has a slope of \\(-\\frac{5}{3}\\) and an x-intercept of \\((-6, 0)\\). What is the y-coordinate of the y-intercept of line \\(p\\)?</p>",
    answer: {
      choices: null,
      correctChoice: null,
      correctAnswer: "-10",
      style: "Free Response",
      rationale: "<p>The correct answer is \\(-10\\). A line in the xy-plane can be represented by the equation \\(y = mx + b\\), where \\(m\\) is the slope of the line and \\(b\\) is the y-coordinate of the y-intercept. It's given that line \\(p\\) has a slope of \\(-\\frac{5}{3}\\). Therefore, \\(m = -\\frac{5}{3}\\). It's also given that line \\(p\\) has an x-intercept of \\((-6, 0)\\). Therefore, when \\(x = -6\\), \\(y = 0\\). Substituting \\(-\\frac{5}{3}\\) for \\(m\\), \\(-6\\) for \\(x\\), and \\(0\\) for \\(y\\) in the equation \\(y = mx + b\\) yields \\(0 = \\left(-\\frac{5}{3}\\right)(-6) + b\\), which is equivalent to \\(0 = 10 + b\\). Subtracting \\(10\\) from both sides of this equation yields \\(-10 = b\\). Therefore, the y-coordinate of the y-intercept of line \\(p\\) is \\(-10\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Hard"
    }
  },
  {
    questionId: "7b689995",
    externalId: "7b689995",
    section: "Math",
    prompt: "<p>The function \\(h\\) is defined by \\(h(x) = 3x - 7\\). What is the value of \\(h(-2)\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\(-13\\)</p>" },
        B: { body: "<p>\\(-10\\)</p>" },
        C: { body: "<p>\\(10\\)</p>" },
        D: { body: "<p>\\(13\\)</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is correct. The value of \\(h(-2)\\) can be found by substituting \\(-2\\) for \\(x\\) in the equation defining \\(h\\). Substituting \\(-2\\) for \\(x\\) in \\(h(x) = 3x - 7\\) yields \\(h(-2) = 3(-2) - 7\\), or \\(h(-2) = -13\\). Therefore, the value of \\(h(-2)\\) is \\(-13\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Easy"
    }
  },
  {
    questionId: "eb08d61f",
    externalId: "eb08d61f",
    section: "Math",
    prompt: "<p>A company that creates and sells tape dispensers calculates its monthly profit, in dollars, by subtracting its fixed monthly costs, in dollars, from its monthly sales revenue, in dollars. The equation \\(15,000 = 2.00x - 4,500\\) represents this situation for a month where \\(x\\) tape dispensers are created and sold. Which statement is the best interpretation of \\(2.00x\\) in this context?</p>",
    answer: {
      choices: {
        A: { body: "<p>The monthly sales revenue, in dollars, from selling \\(x\\) tape dispensers</p>" },
        B: { body: "<p>The monthly sales revenue, in dollars, from each tape dispenser sold</p>" },
        C: { body: "<p>The monthly cost, in dollars, of creating each tape dispenser</p>" },
        D: { body: "<p>The monthly cost, in dollars, of creating \\(x\\) tape dispensers</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is correct. It's given that the equation \\(15,000 = 2.00x - 4,500\\) represents this situation for a month where \\(x\\) tape dispensers are created and sold. It's also given that the company calculates its monthly profit, in dollars, by subtracting its fixed monthly costs, in dollars, from its monthly sales revenue, in dollars. It follows that \\(2.00x\\) represents the monthly sales revenue, in dollars. Therefore, the best interpretation of \\(2.00x\\) in this context is the monthly sales revenue from selling \\(x\\) tape dispensers.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in one variable",
      difficulty: "Medium"
    }
  },
  {
    questionId: "1c4f9da2",
    externalId: "1c4f9da2",
    section: "Math",
    prompt: "<p>For the linear function \\(f\\), \\(f(0) = 17\\) and \\(f(1) = 17\\). Which equation defines \\(f\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\(f(x) = \\frac{1}{17}\\)</p>" },
        B: { body: "<p>\\(f(x) = 1\\)</p>" },
        C: { body: "<p>\\(f(x) = 17\\)</p>" },
        D: { body: "<p>\\(f(x) = 34\\)</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is correct. An equation defining the linear function \\(f\\) can be written in the form \\(f(x) = mx + b\\), where \\(m\\) is the slope and \\((0, b)\\) is the y-intercept of the graph of \\(y = f(x)\\) in the xy-plane. The slope of the graph of \\(y = f(x)\\) can be found using the formula \\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\), where \\((x_1, y_1)\\) and \\((x_2, y_2)\\) are any two points that the graph passes through. If \\(f(0) = 17\\), it follows that the graph of \\(y = f(x)\\) passes through the point \\((0, 17)\\). If \\(f(1) = 17\\), it follows that the graph of \\(y = f(x)\\) passes through the point \\((1, 17)\\). Substituting \\((0, 17)\\) and \\((1, 17)\\) for \\((x_1, y_1)\\) and \\((x_2, y_2)\\), respectively, in the formula \\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\) yields \\(m = \\frac{17 - 17}{1 - 0}\\), which is equivalent to \\(m = \\frac{0}{1}\\), or \\(m = 0\\). Since the graph of \\(y = f(x)\\) passes through \\((0, 17)\\), it follows that \\(b = 17\\). Substituting \\(0\\) for \\(m\\) and \\(17\\) for \\(b\\) in the equation \\(f(x) = mx + b\\) yields \\(f(x) = 0x + 17\\), or \\(f(x) = 17\\). Thus, the equation that defines \\(f\\) is \\(f(x) = 17\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Easy"
    }
  },
  {
    questionId: "16915678",
    externalId: "16915678",
    section: "Math",
    prompt: "<p>A gym charges its members a onetime \\$36 enrollment fee and a membership fee of \\$19 per month. If there are no charges other than the enrollment fee and the membership fee, after how many months will a member have been charged a total of \\$188 at the gym?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\(4\\)</p>" },
        B: { body: "<p>\\(5\\)</p>" },
        C: { body: "<p>\\(8\\)</p>" },
        D: { body: "<p>\\(10\\)</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is correct. It's given that a gym charges its members a onetime \\$36 enrollment fee and a membership fee of \\$19 per month. Let \\(x\\) represent the number of months at the gym after which a member will have been charged a total of \\$188. If there are no charges other than the enrollment fee and the membership fee, the equation \\(36 + 19x = 188\\) can be used to represent this situation. Subtracting \\(36\\) from both sides of this equation yields \\(19x = 152\\). Dividing both sides of this equation by \\(19\\) yields \\(x = 8\\). Therefore, a member will have been charged a total of \\$188 after \\(8\\) months at the gym.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in one variable",
      difficulty: "Easy"
    }
  },
  {
    questionId: "741da959",
    externalId: "741da959",
    section: "Math",
    prompt: "<p>The shaded region shown represents the solutions to which inequality?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\(y \\geq \\frac{2}{3}x - 6\\)</p>" },
        B: { body: "<p>\\(y \\geq \\frac{2}{3}x + 6\\)</p>" },
        C: { body: "<p>\\(y \\geq \\frac{2}{3}x - 9\\)</p>" },
        D: { body: "<p>\\(y \\geq \\frac{2}{3}x + 9\\)</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is correct. The equation for the line representing the boundary of the shaded region can be written in slope-intercept form \\(y = mx + b\\), where \\(m\\) is the slope and \\((0, b)\\) is the y-intercept of the line. For the graph shown, the boundary line passes through the points \\((0, -6)\\) and \\((9, 0)\\). Given two points on a line, \\((x_1, y_1)\\) and \\((x_2, y_2)\\), the slope of the line can be calculated using the equation \\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\). Substituting the points \\((0, -6)\\) and \\((9, 0)\\) for \\((x_1, y_1)\\) and \\((x_2, y_2)\\), respectively, in this equation yields \\(m = \\frac{0 - (-6)}{9 - 0}\\), which is equivalent to \\(m = \\frac{6}{9}\\), or \\(m = \\frac{2}{3}\\). Since the point \\((0, -6)\\) represents the y-intercept, it follows that \\(b = -6\\). Substituting \\(\\frac{2}{3}\\) for \\(m\\) and \\(-6\\) for \\(b\\) in the equation \\(y = mx + b\\) yields \\(y = \\frac{2}{3}x - 6\\) as the equation of the boundary line. Since the shaded region represents all the points on and above this boundary line, it follows that the shaded region shown represents the solutions to the inequality \\(y \\geq \\frac{2}{3}x - 6\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear inequalities in one or two variables",
      difficulty: "Easy"
    }
  },
  {
    questionId: "90f7af74",
    externalId: "90f7af74",
    section: "Math",
    prompt: "<p>A small business owner budgets \\$2,200 to purchase candles. The owner must purchase a minimum of \\(200\\) candles to maintain the discounted pricing. If the owner pays \\$4.90 per candle to purchase small candles and \\$11.60 per candle to purchase large candles, what is the maximum number of large candles the owner can purchase to stay within the budget and maintain the discounted pricing?</p>",
    answer: {
      choices: null,
      correctChoice: null,
      correctAnswer: "182",
      style: "Free Response",
      rationale: "<p>The correct answer is \\(182\\). Let \\(s\\) represent the number of small candles the owner can purchase, and let \\(\\ell\\) represent the number of large candles the owner can purchase. It's given that the owner pays \\$4.90 per candle to purchase small candles and \\$11.60 per candle to purchase large candles. Therefore, the owner pays \\(4.90s\\) dollars for \\(s\\) small candles and \\(11.60\\ell\\) dollars for \\(\\ell\\) large candles, which means the owner pays a total of \\(4.90s + 11.60\\ell\\) dollars to purchase candles. It's given that the owner budgets \\$2,200 to purchase candles. Therefore, \\(4.90s + 11.60\\ell \\leq 2,200\\). It's also given that the owner must purchase a minimum of \\(200\\) candles. Therefore, \\(s + \\ell \\geq 200\\). The inequalities \\(4.90s + 11.60\\ell \\leq 2,200\\) and \\(s + \\ell \\geq 200\\) can be combined into one compound inequality by rewriting the second inequality so that its left-hand side is equivalent to the left-hand side of the first inequality. Subtracting \\(\\ell\\) from both sides of the inequality \\(s + \\ell \\geq 200\\) yields \\(s \\geq 200 - \\ell\\). Multiplying both sides of this inequality by \\(4.90\\) yields \\(4.90s \\geq 4.90(200 - \\ell)\\), or \\(4.90s \\geq 980 - 4.90\\ell\\). Adding \\(11.60\\ell\\) to both sides of this inequality yields \\(4.90s + 11.60\\ell \\geq 980 - 4.90\\ell + 11.60\\ell\\), or \\(4.90s + 11.60\\ell \\geq 980 + 6.70\\ell\\). This inequality can be combined with the inequality \\(4.90s + 11.60\\ell \\leq 2,200\\), which yields the compound inequality \\(980 + 6.70\\ell \\leq 4.90s + 11.60\\ell \\leq 2,200\\). It follows that \\(980 + 6.70\\ell \\leq 2,200\\). Subtracting \\(980\\) from both sides of this inequality yields \\(6.70\\ell \\leq 1,220\\). Dividing both sides of this inequality by \\(6.70\\) yields approximately \\(\\ell \\leq 182.09\\). Since the number of large candles the owner purchases must be a whole number, the maximum number of large candles the owner can purchase is the largest whole number less than \\(182.09\\), which is \\(182\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear inequalities in one or two variables",
      difficulty: "Hard"
    }
  },
  {
    questionId: "1cc52a1f",
    externalId: "1cc52a1f",
    section: "Math",
    prompt: "<p>A certain apprentice has enrolled in \\(85\\) hours of training courses. The equation \\(10x + 15y = 85\\) represents this situation, where \\(x\\) is the number of on-site training courses and \\(y\\) is the number of online training courses this apprentice has enrolled in. How many more hours does each online training course take than each on-site training course?</p>",
    answer: {
      choices: null,
      correctChoice: null,
      correctAnswer: "5",
      style: "Free Response",
      rationale: "<p>The correct answer is \\(5\\). It's given that the equation \\(10x + 15y = 85\\) represents the situation, where \\(x\\) is the number of on-site training courses, \\(y\\) is the number of online training courses, and \\(85\\) is the total number of hours of training courses the apprentice has enrolled in. Therefore, \\(10x\\) represents the number of hours the apprentice has enrolled in on-site training courses, and \\(15y\\) represents the number of hours the apprentice has enrolled in online training courses. Since \\(x\\) is the number of on-site training courses and \\(y\\) is the number of online training courses the apprentice has enrolled in, \\(10\\) is the number of hours each on-site course takes and \\(15\\) is the number of hours each online course takes. Subtracting these numbers gives \\(15 - 10\\), or \\(5\\) more hours each online training course takes than each on-site training course.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Hard"
    }
  },
  {
    questionId: "d609d1ce",
    externalId: "d609d1ce",
    section: "Math",
    prompt: "<p>Line \\(k\\) is defined by \\(y = -\\frac{17}{3}x + 5\\). Line \\(j\\) is perpendicular to line \\(k\\) in the xy-plane. What is the slope of line \\(j\\)?</p>",
    answer: {
      choices: null,
      correctChoice: null,
      correctAnswer: "3/17",
      alternateAnswers: [".1764", ".1765", "0.176"],
      style: "Free Response",
      rationale: "<p>The correct answer is \\(\\frac{3}{17}\\). It's given that line \\(j\\) is perpendicular to line \\(k\\) in the xy-plane. This means that the slope of line \\(j\\) is the negative reciprocal of the slope of line \\(k\\). The equation of line \\(k\\), \\(y = -\\frac{17}{3}x + 5\\), is written in slope-intercept form \\(y = mx + b\\), where \\(m\\) is the slope of the line and \\(b\\) is the y-coordinate of the y-intercept of the line. It follows that the slope of line \\(k\\) is \\(-\\frac{17}{3}\\). The negative reciprocal of a number is \\(-1\\) divided by the number. Therefore, the negative reciprocal of \\(-\\frac{17}{3}\\) is \\(\\frac{-1}{-\\frac{17}{3}}\\), or \\(\\frac{3}{17}\\). Thus, the slope of line \\(j\\) is \\(\\frac{3}{17}\\). Note that 3/17, .1764, .1765, and 0.176 are examples of ways to enter a correct answer.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Medium"
    }
  },
  {
    questionId: "65d4bce5",
    externalId: "65d4bce5",
    section: "Math",
    prompt: "<p>\\(3\\) more than \\(8\\) times a number \\(x\\) is equal to \\(83\\). Which equation represents this situation?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\((3)(8)x = 83\\)</p>" },
        B: { body: "<p>\\(8x = 83 + 3\\)</p>" },
        C: { body: "<p>\\(3x + 8 = 83\\)</p>" },
        D: { body: "<p>\\(8x + 3 = 83\\)</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. The given phrase \"\\(8\\) times a number \\(x\\)\" can be represented by the expression \\(8x\\). The given phrase \"\\(3\\) more than\" indicates an increase of \\(3\\) to a quantity. Therefore \"\\(3\\) more than \\(8\\) times a number \\(x\\)\" can be represented by the expression \\(8x + 3\\). Since it's given that \\(3\\) more than \\(8\\) times a number \\(x\\) is equal to \\(83\\), it follows that \\(8x + 3\\) is equal to \\(83\\), or \\(8x + 3 = 83\\). Therefore, the equation that represents this situation is \\(8x + 3 = 83\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in one variable",
      difficulty: "Easy"
    }
  },
  {
    questionId: "ace7d6eb",
    externalId: "ace7d6eb",
    section: "Math",
    prompt: "<p>A food truck buys forks for \\$0.04 each and plates for \\$0.48 each. The total cost of \\(x\\) forks and \\(y\\) plates is \\$661.76. Which equation represents this situation?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\(0.48x - 0.04y = 661.76\\)</p>" },
        B: { body: "<p>\\(0.04x - 0.48y = 661.76\\)</p>" },
        C: { body: "<p>\\(0.48x + 0.04y = 661.76\\)</p>" },
        D: { body: "<p>\\(0.04x + 0.48y = 661.76\\)</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. It's given that the food truck buys forks for \\$0.04 each. Therefore, the cost, in dollars, of \\(x\\) forks can be represented by the expression \\(0.04x\\). It's also given that the food truck buys plates for \\$0.48 each. Therefore, the cost, in dollars, of \\(y\\) plates can be represented by the expression \\(0.48y\\). Since the total cost of \\(x\\) forks and \\(y\\) plates is \\$661.76, the equation \\(0.04x + 0.48y = 661.76\\) represents this situation.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Easy"
    }
  },
  {
    questionId: "e914e737",
    externalId: "e914e737",
    section: "Math",
    prompt: "<p>\\(y = 70x + 8\\)</p><p>Which table gives three values of \\(x\\) and their corresponding values of \\(y\\) for the given equation?</p>",
    answer: {
      choices: {
        A: { body: "<p>x: 0, 2, 4; y: 8, 148, 288</p>" },
        B: { body: "<p>x: 0, 2, 4; y: 70, 78, 86</p>" },
        C: { body: "<p>x: 0, 2, 4; y: 70, 140, 280</p>" },
        D: { body: "<p>x: 0, 2, 4; y: 8, 132, 272</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is correct. Each of the given choices gives three values of \\(x\\): \\(0\\), \\(2\\), and \\(4\\). Substituting \\(0\\) for \\(x\\) in the given equation yields \\(y = 70(0) + 8\\), or \\(y = 8\\). Therefore, when \\(x = 0\\), the corresponding value of \\(y\\) for the given equation is \\(8\\). Substituting \\(2\\) for \\(x\\) in the given equation yields \\(y = 70(2) + 8\\), or \\(y = 148\\). Therefore, when \\(x = 2\\), the corresponding value of \\(y\\) for the given equation is \\(148\\). Substituting \\(4\\) for \\(x\\) in the given equation yields \\(y = 70(4) + 8\\), or \\(y = 288\\). Therefore, when \\(x = 4\\), the corresponding value of \\(y\\) for the given equation is \\(288\\). Thus, if the three values of \\(x\\) are \\(0\\), \\(2\\), and \\(4\\), then their corresponding values of \\(y\\) are \\(8\\), \\(148\\), and \\(288\\), respectively, for the given equation.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Easy"
    }
  },
  {
    questionId: "e35e5a7e",
    externalId: "e35e5a7e",
    section: "Math",
    prompt: "<p>The graph of \\(y = f(x) - 11\\) is shown. Which equation defines the linear function \\(f\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\(f(x) = -13x - 11\\)</p>" },
        B: { body: "<p>\\(f(x) = -2x + 7\\)</p>" },
        C: { body: "<p>\\(f(x) = -13x + 7\\)</p>" },
        D: { body: "<p>\\(f(x) = -2x - 11\\)</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is correct. The graph of a line in the xy-plane can be represented by the equation \\(y = mx + b\\), where \\(m\\) is the slope of the graph and its y-intercept is \\((0, b)\\). Since the y-intercept of the graph shown is \\((0, 2)\\), the value of \\(b\\) is \\(2\\). Since the graph also passes through the point \\((4, 1)\\), the slope can be calculated as \\(\\frac{1 - 2}{4 - 0}\\), or \\(-\\frac{1}{4}\\). Therefore, the value of \\(m\\) is \\(-\\frac{1}{4}\\). Substituting \\(-\\frac{1}{4}\\) for \\(m\\) and \\(2\\) for \\(b\\) in the equation \\(y = mx + b\\) yields \\(y = -\\frac{1}{4}x + 2\\). Wait, let me recalculate. The graph passes through \\((-1, -2)\\) and \\((0, -4)\\). The slope is \\(\\frac{-4 - (-2)}{0 - (-1)} = \\frac{-2}{1} = -2\\). So \\(m = -2\\) and \\(b = -4\\). Therefore \\(y = -2x - 4\\). It's given that the graph shown is the graph of \\(y = f(x) - 11\\). Substituting \\(f(x) - 11\\) for \\(y\\) in the equation \\(y = -2x - 4\\) yields \\(f(x) - 11 = -2x - 4\\). Adding \\(11\\) to both sides of this equation yields \\(f(x) = -2x + 7\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Medium"
    }
  },
  {
    questionId: "c41e64a3",
    externalId: "c41e64a3",
    section: "Math",
    prompt: "<p>\\(f(x) = 7x + 1\\)</p><p>The function \\(f\\) gives the total number of people on a company retreat with \\(x\\) managers. What is the total number of people on a company retreat with \\(7\\) managers?</p>",
    answer: {
      choices: null,
      correctChoice: null,
      correctAnswer: "50",
      style: "Free Response",
      rationale: "<p>The correct answer is \\(50\\). It's given that the function \\(f\\) gives the total number of people on a company retreat with \\(x\\) managers. It's also given that \\(7\\) managers are on the company retreat. Substituting \\(7\\) for \\(x\\) in the given function yields \\(f(7) = 7(7) + 1\\), or \\(f(7) = 50\\). Therefore, there are a total of \\(50\\) people on a company retreat with \\(7\\) managers.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Easy"
    }
  },
  {
    questionId: "1cab63df",
    externalId: "1cab63df",
    section: "Math",
    prompt: "<p>If \\(4x + 2 = 12\\), what is the value of \\(16x + 8\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\(40\\)</p>" },
        B: { body: "<p>\\(48\\)</p>" },
        C: { body: "<p>\\(56\\)</p>" },
        D: { body: "<p>\\(60\\)</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is correct. Multiplying both sides of the given equation by \\(4\\) yields \\((4)(4x + 2) = (4)(12)\\), or \\(16x + 8 = 48\\). Therefore, the value of \\(16x + 8\\) is \\(48\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in one variable",
      difficulty: "Easy"
    }
  },
  {
    questionId: "ac7cddee",
    externalId: "ac7cddee",
    section: "Math",
    prompt: "<p>When line \\(n\\) is graphed in the xy-plane, it has an x-intercept of \\((-4, 0)\\) and a y-intercept of \\(\\left(0, \\frac{86}{3}\\right)\\). What is the slope of line \\(n\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\(\\frac{3}{344}\\)</p>" },
        B: { body: "<p>\\(\\frac{6}{43}\\)</p>" },
        C: { body: "<p>\\(\\frac{43}{6}\\)</p>" },
        D: { body: "<p>\\(\\frac{344}{3}\\)</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is correct. It's given that when line \\(n\\) is graphed in the xy-plane, it has an x-intercept of \\((-4, 0)\\) and a y-intercept of \\(\\left(0, \\frac{86}{3}\\right)\\). The slope, \\(m\\), of a line can be found using any two points on the line, \\((x_1, y_1)\\) and \\((x_2, y_2)\\), and the slope formula \\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\). Substituting the points \\((-4, 0)\\) and \\(\\left(0, \\frac{86}{3}\\right)\\) for \\((x_1, y_1)\\) and \\((x_2, y_2)\\), respectively, in the slope formula yields \\(m = \\frac{\\frac{86}{3} - 0}{0 - (-4)}\\), or \\(m = \\frac{43}{6}\\). Therefore, the slope of line \\(n\\) is \\(\\frac{43}{6}\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Medium"
    }
  },
  {
    questionId: "8c6982c3",
    externalId: "8c6982c3",
    section: "Math",
    prompt: "<p>If \\(f(x) = x + 7\\) and \\(g(x) = 7x\\), what is the value of \\(4f(2) - g(2)\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\(-5\\)</p>" },
        B: { body: "<p>\\(1\\)</p>" },
        C: { body: "<p>\\(22\\)</p>" },
        D: { body: "<p>\\(28\\)</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is correct. The value of \\(f(2)\\) can be found by substituting \\(2\\) for \\(x\\) in the given equation \\(f(x) = x + 7\\), which yields \\(f(2) = 2 + 7\\), or \\(f(2) = 9\\). The value of \\(g(2)\\) can be found by substituting \\(2\\) for \\(x\\) in the given equation \\(g(x) = 7x\\), which yields \\(g(2) = 7(2)\\), or \\(g(2) = 14\\). The value of the expression \\(4f(2) - g(2)\\) can be found by substituting the corresponding values into the expression, which gives \\(4(9) - 14\\). This expression is equivalent to \\(36 - 14\\), or \\(22\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Medium"
    }
  },
  {
    questionId: "90c618a3",
    externalId: "90c618a3",
    section: "Math",
    prompt: "<p>\\(4x - 6y = 10y + 2\\)</p><p>\\(ty = \\frac{1}{2} + 2x\\)</p><p>In the given system of equations, \\(t\\) is a constant. If the system has no solution, what is the value of \\(t\\)?</p>",
    answer: {
      choices: null,
      correctChoice: null,
      correctAnswer: "8",
      style: "Free Response",
      rationale: "<p>The correct answer is \\(8\\). The given system of equations can be solved using the elimination method. Multiplying both sides of the second equation in the given system by \\(-2\\) yields \\(-2ty = -1 - 4x\\), or \\(-1 - 4x = -2ty\\). Adding this equation to the first equation in the given system, \\(4x - 6y = 10y + 2\\), yields \\((4x - 6y) + (-1 - 4x) = (10y + 2) + (-2ty)\\), or \\(-1 - 6y = 10y - 2ty + 2\\). Subtracting \\(10y\\) from both sides of this equation yields \\((-1 - 6y) - (10y) = (10y - 2ty + 2) - (10y)\\), or \\(-1 - 16y = -2ty + 2\\). If the given system has no solution, then the equation \\(-1 - 16y = -2ty + 2\\) has no solution. If this equation has no solution, the coefficients of \\(y\\) on each side of the equation, \\(-16\\) and \\(-2t\\), must be equal, which yields the equation \\(-16 = -2t\\). Dividing both sides of this equation by \\(-2\\) yields \\(8 = t\\). Thus, if the system has no solution, the value of \\(t\\) is \\(8\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Systems of two linear equations in two variables",
      difficulty: "Hard"
    }
  },
  {
    questionId: "83a38c31",
    externalId: "83a38c31",
    section: "Math",
    prompt: "<p>The function \\(f(x)\\) is defined as \\(19\\) more than \\(4\\) times a number \\(x\\). If \\(y = f(x)\\) is graphed in the \\(xy\\)-plane, what is the best interpretation of the \\(x\\)-intercept?</p>",
    answer: {
      choices: {
        A: { body: "<p>When \\(f(x) = 0\\), the number is \\(-\\frac{19}{4}\\).</p>" },
        B: { body: "<p>When the number is \\(0\\), \\(f(x) = 19\\).</p>" },
        C: { body: "<p>The value of \\(f(x)\\) increases by \\(1\\) for each increase of \\(4\\) in the value of the number.</p>" },
        D: { body: "<p>For each increase of \\(1\\) in the value of the number, \\(f(x)\\) increases by \\(4\\).</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is correct. It's given that the function \\(f(x)\\) is defined as \\(19\\) more than \\(4\\) times a number \\(x\\). This can be represented by the equation \\(f(x) = 4x + 19\\). The x-intercept of the graph of \\(y = f(x)\\) in the xy-plane is the point where the graph intersects the x-axis, or the point on the graph where the value of \\(f(x)\\) is equal to \\(0\\). Substituting \\(0\\) for \\(f(x)\\) in the equation \\(f(x) = 4x + 19\\) yields \\(0 = 4x + 19\\). Subtracting \\(19\\) from each side of this equation yields \\(-19 = 4x\\). Dividing each side of this equation by \\(4\\) yields \\(x = -\\frac{19}{4}\\). Therefore, when \\(f(x) = 0\\), the number is \\(-\\frac{19}{4}\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Hard"
    }
  },
  {
    questionId: "e2b60318",
    externalId: "e2b60318",
    section: "Math",
    prompt: "<p>Line \\(p\\) is defined by \\(9x + y = 6\\). Line \\(r\\) is perpendicular to line \\(p\\) in the xy-plane. What is the slope of line \\(r\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\(-9\\)</p>" },
        B: { body: "<p>\\(-\\frac{1}{9}\\)</p>" },
        C: { body: "<p>\\(\\frac{1}{9}\\)</p>" },
        D: { body: "<p>\\(9\\)</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is correct. It's given that line \\(r\\) is perpendicular to line \\(p\\) in the xy-plane. This means that the slope of line \\(r\\) is the negative reciprocal of the slope of line \\(p\\). If the equation for line \\(p\\) is rewritten in slope-intercept form \\(y = mx + b\\), where \\(m\\) and \\(b\\) are constants, then \\(m\\) is the slope of the line and \\((0, b)\\) is its y-intercept. Subtracting \\(9x\\) from both sides of the equation \\(9x + y = 6\\) yields \\(y = -9x + 6\\). It follows that the slope of line \\(p\\) is \\(-9\\). The negative reciprocal of a number is \\(-1\\) divided by the number. Therefore, the negative reciprocal of \\(-9\\) is \\(\\frac{-1}{-9}\\), or \\(\\frac{1}{9}\\). Thus, the slope of line \\(r\\) is \\(\\frac{1}{9}\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Medium"
    }
  },
  {
    questionId: "8b52b69a",
    externalId: "8b52b69a",
    section: "Math",
    prompt: "<p>What is the y-intercept of the line graphed?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\((-5, 0)\\)</p>" },
        B: { body: "<p>\\((0, 0)\\)</p>" },
        C: { body: "<p>\\((0, 5)\\)</p>" },
        D: { body: "<p>\\((0, 9)\\)</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is correct. The y-intercept of a graph is the point where the graph intersects the y-axis. The line graphed intersects the y-axis at the point \\((0, 5)\\). Therefore, the y-intercept of the line graphed is \\((0, 5)\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Easy"
    }
  },
  {
    questionId: "28c92268",
    externalId: "28c92268",
    section: "Math",
    prompt: "<p>A total of \\(2\\) squares each have side length \\(r\\). A total of \\(6\\) equilateral triangles each have side length \\(t\\). None of these squares and triangles shares a side. The sum of the perimeters of all these squares and triangles is \\(210\\). Which equation represents this situation?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\(6r + 24t = 210\\)</p>" },
        B: { body: "<p>\\(2r + 6t = 210\\)</p>" },
        C: { body: "<p>\\(8r + 18t = 210\\)</p>" },
        D: { body: "<p>\\(6r + 2t = 210\\)</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is correct. It's given that a total of \\(2\\) squares each have side length \\(r\\). Therefore, each of the squares has perimeter \\(4r\\). Since there are a total of \\(2\\) squares, the sum of the perimeters of these squares is \\(4r + 4r\\), which is equivalent to \\(2(4r)\\), or \\(8r\\). It's also given that a total of \\(6\\) equilateral triangles each have side length \\(t\\). Therefore, each of the equilateral triangles has perimeter \\(3t\\). Since there are a total of \\(6\\) equilateral triangles, the sum of the perimeters of these triangles is \\(3t + 3t + 3t + 3t + 3t + 3t\\), which is equivalent to \\(6(3t)\\), or \\(18t\\). Since the sum of the perimeters of the squares is \\(8r\\) and the sum of the perimeters of the triangles is \\(18t\\), the sum of the perimeters of all these squares and triangles is \\(8r + 18t\\). It's given that the sum of the perimeters of all these squares and triangles is \\(210\\). Therefore, the equation \\(8r + 18t = 210\\) represents this situation.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Medium"
    }
  },
  {
    questionId: "c3f7afcd",
    externalId: "c3f7afcd",
    section: "Math",
    prompt: "<p>If \\(2 + x = 60\\), what is the value of \\(16 + 8x\\)?</p>",
    answer: {
      choices: null,
      correctChoice: null,
      correctAnswer: "480",
      style: "Free Response",
      rationale: "<p>The correct answer is \\(480\\). Multiplying both sides of the given equation by \\(8\\) yields \\(8(2 + x) = 8(60)\\), or \\(16 + 8x = 480\\). Therefore, if \\(2 + x = 60\\), the value of \\(16 + 8x\\) is \\(480\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in one variable",
      difficulty: "Easy"
    }
  },
  {
    questionId: "912eb2f0",
    externalId: "912eb2f0",
    section: "Math",
    prompt: "<p>What is the y-intercept of the graph of \\(y = 34x + 81\\) in the xy-plane?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\((0, 81)\\)</p>" },
        B: { body: "<p>\\((0, 34)\\)</p>" },
        C: { body: "<p>\\((0, -34)\\)</p>" },
        D: { body: "<p>\\((0, -81)\\)</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is correct. In the xy-plane, the graph of an equation in the form \\(y = mx + b\\), where \\(m\\) and \\(b\\) are constants, has a slope of \\(m\\) and a y-intercept of \\((0, b)\\). Therefore, the y-intercept of the graph of \\(y = 34x + 81\\) is \\((0, 81)\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Easy"
    }
  },
  {
    questionId: "a8e43ae3",
    externalId: "a8e43ae3",
    section: "Math",
    prompt: "<p>The graph of \\(y = f(x) + 14\\) is shown. Which equation defines function \\(f\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\(f(x) = -\\frac{1}{4}x - 12\\)</p>" },
        B: { body: "<p>\\(f(x) = -\\frac{1}{4}x + 16\\)</p>" },
        C: { body: "<p>\\(f(x) = -\\frac{1}{4}x + 2\\)</p>" },
        D: { body: "<p>\\(f(x) = -\\frac{1}{4}x - 14\\)</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is correct. An equation for the graph shown can be written in slope-intercept form \\(y = mx + b\\), where \\(m\\) is the slope of the graph and its y-intercept is \\((0, b)\\). Since the y-intercept of the graph shown is \\((0, 2)\\), the value of \\(b\\) is \\(2\\). Since the graph also passes through the point \\((4, 1)\\), the slope can be calculated as \\(\\frac{1 - 2}{4 - 0}\\), or \\(-\\frac{1}{4}\\). Therefore, the value of \\(m\\) is \\(-\\frac{1}{4}\\). Substituting \\(-\\frac{1}{4}\\) for \\(m\\) and \\(2\\) for \\(b\\) in the equation \\(y = mx + b\\) yields \\(y = -\\frac{1}{4}x + 2\\). It's given that an equation for the graph shown is \\(y = f(x) + 14\\). Substituting \\(f(x) + 14\\) for \\(y\\) in the equation \\(y = -\\frac{1}{4}x + 2\\) yields \\(f(x) + 14 = -\\frac{1}{4}x + 2\\). Subtracting \\(14\\) from both sides of this equation yields \\(f(x) = -\\frac{1}{4}x - 12\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Hard"
    }
  },
  {
    questionId: "beb54560",
    externalId: "beb54560",
    section: "Math",
    prompt: "<p>Line \\(p\\) is defined by \\(4y + 8x = 6\\). Line \\(r\\) is perpendicular to line \\(p\\) in the xy-plane. What is the slope of line \\(r\\)?</p>",
    answer: {
      choices: null,
      correctChoice: null,
      correctAnswer: "1/2",
      alternateAnswers: [".5", "0.5"],
      style: "Free Response",
      rationale: "<p>The correct answer is \\(\\frac{1}{2}\\). For an equation in slope-intercept form \\(y = mx + b\\), \\(m\\) represents the slope of the line in the xy-plane defined by this equation. It's given that line \\(p\\) is defined by \\(4y + 8x = 6\\). Subtracting \\(8x\\) from both sides of this equation yields \\(4y = -8x + 6\\). Dividing both sides of this equation by \\(4\\) yields \\(y = -\\frac{8}{4}x + \\frac{6}{4}\\), or \\(y = -2x + \\frac{3}{2}\\). Thus, the slope of line \\(p\\) is \\(-2\\). If line \\(r\\) is perpendicular to line \\(p\\), then the slope of line \\(r\\) is the negative reciprocal of the slope of line \\(p\\). The negative reciprocal of \\(-2\\) is \\(\\frac{1}{2}\\). Note that 1/2 and .5 are examples of ways to enter a correct answer.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Hard"
    }
  },
  {
    questionId: "e1dceebe",
    externalId: "e1dceebe",
    section: "Math",
    prompt: "<p>A teacher is creating an assignment worth \\(70\\) points. The assignment will consist of questions worth \\(1\\) point and questions worth \\(3\\) points. Which equation represents this situation, where \\(x\\) represents the number of \\(1\\)-point questions and \\(y\\) represents the number of \\(3\\)-point questions?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\(4xy = 70\\)</p>" },
        B: { body: "<p>\\(4(x + y) = 70\\)</p>" },
        C: { body: "<p>\\(3x + y = 70\\)</p>" },
        D: { body: "<p>\\(x + 3y = 70\\)</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. Since \\(x\\) represents the number of \\(1\\)-point questions and \\(y\\) represents the number of \\(3\\)-point questions, the assignment is worth a total of \\(1 \\cdot x + 3 \\cdot y\\), or \\(x + 3y\\), points. Since the assignment is worth \\(70\\) points, the equation \\(x + 3y = 70\\) represents this situation.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Easy"
    }
  }
];

// Write each question to a separate JSON file
let count = 0;
questions.forEach(question => {
  const filename = `${question.questionId}.json`;
  const filepath = path.join(outputDir, filename);

  fs.writeFileSync(filepath, JSON.stringify(question, null, 2));
  count++;
  console.log(`Created: ${filename}`);
});

console.log(`\nTotal questions processed: ${count}`);
