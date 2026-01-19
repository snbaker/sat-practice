const fs = require('fs');
const path = require('path');

// Output directory for JSON files
const outputDir = path.join(__dirname, '../public/bank/questions');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// All 50 questions extracted from the PDF
const questions = [
  {
    questionId: "b799405e",
    externalId: "b799405e",
    section: "Math",
    prompt: "<p>Vivian bought party hats and cupcakes for \\\\(\\$71\\\\). Each package of party hats cost \\\\(\\$3\\\\), and each cupcake cost \\\\(\\$1\\\\). If Vivian bought \\\\(10\\\\) packages of party hats, how many cupcakes did she buy?</p>",
    answer: {
      correctAnswer: "41",
      style: "Free Response",
      rationale: "<p>The correct answer is \\\\(41\\\\). The number of cupcakes Vivian bought can be found by first finding the amount Vivian spent on cupcakes. The amount Vivian spent on cupcakes can be found by subtracting the amount Vivian spent on party hats from the total amount Vivian spent. The amount Vivian spent on party hats can be found by multiplying the cost per package of party hats by the number of packages of party hats, which yields \\\\(\\$3 \\cdot 10\\\\), or \\\\(\\$30\\\\). Subtracting the amount Vivian spent on party hats, \\\\(\\$30\\\\), from the total amount Vivian spent, \\\\(\\$71\\\\), yields \\\\(\\$71 - \\$30\\\\), or \\\\(\\$41\\\\). Since the amount Vivian spent on cupcakes was \\\\(\\$41\\\\) and each cupcake cost \\\\(\\$1\\\\), it follows that Vivian bought \\\\(41\\\\) cupcakes.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Easy"
    }
  },
  {
    questionId: "5d6fef30",
    externalId: "5d6fef30",
    section: "Math",
    prompt: "<p>\\\\[s + 7r = 27\\\\]\\\\[r = 3\\\\]</p><p>What is the solution \\\\((r, s)\\\\) to the given system of equations?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\((6, 3)\\\\)</p>" },
        B: { body: "<p>\\\\((3, 6)\\\\)</p>" },
        C: { body: "<p>\\\\((3, 27)\\\\)</p>" },
        D: { body: "<p>\\\\((27, 3)\\\\)</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is correct. The second equation in the given system is \\\\(r = 3\\\\). Substituting \\\\(3\\\\) for \\\\(r\\\\) in the first equation in the given system yields \\\\(s + 7(3) = 27\\\\), or \\\\(s + 21 = 27\\\\). Subtracting \\\\(21\\\\) from both sides of this equation yields \\\\(s = 6\\\\). Therefore, the solution \\\\((r, s)\\\\) to the given system of equations is \\\\((3, 6)\\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Systems of two linear equations in two variables",
      difficulty: "Easy"
    }
  },
  {
    questionId: "3c65fb48",
    externalId: "3c65fb48",
    section: "Math",
    prompt: "<p>The table shows three values of \\\\(x\\\\) and their corresponding values of \\\\(y\\\\), where \\\\(n\\\\) is a constant, for the linear relationship between \\\\(x\\\\) and \\\\(y\\\\).</p><table><tr><th>\\\\(x\\\\)</th><th>\\\\(y\\\\)</th></tr><tr><td>\\\\(-6\\\\)</td><td>\\\\(n + 184\\\\)</td></tr><tr><td>\\\\(-3\\\\)</td><td>\\\\(n + 92\\\\)</td></tr><tr><td>\\\\(0\\\\)</td><td>\\\\(n\\\\)</td></tr></table><p>What is the slope of the line that represents this relationship in the xy-plane?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\(-\\frac{92}{3}\\\\)</p>" },
        B: { body: "<p>\\\\(-\\frac{3}{92}\\\\)</p>" },
        C: { body: "<p>\\\\(\\frac{n+92}{-3}\\\\)</p>" },
        D: { body: "<p>\\\\(\\frac{2n-92}{3}\\\\)</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is correct. The slope, \\\\(m\\\\), of a line in the xy-plane can be found using two points on the line, \\\\((x_1, y_1)\\\\) and \\\\((x_2, y_2)\\\\), and the slope formula \\\\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\\\). Based on the given table, the line representing the relationship between \\\\(x\\\\) and \\\\(y\\\\) in the xy-plane passes through the points \\\\((-6, n + 184)\\\\), \\\\((-3, n + 92)\\\\), and \\\\((0, n)\\\\), where \\\\(n\\\\) is a constant. Substituting two of these points, \\\\((-3, n + 92)\\\\) and \\\\((0, n)\\\\), for \\\\((x_1, y_1)\\\\) and \\\\((x_2, y_2)\\\\), respectively, in the slope formula yields \\\\(m = \\frac{n - (n + 92)}{0 - (-3)}\\\\), which is equivalent to \\\\(m = \\frac{n - n - 92}{0 + 3}\\\\), or \\\\(m = -\\frac{92}{3}\\\\). Therefore, the slope of the line that represents this relationship in the xy-plane is \\\\(-\\frac{92}{3}\\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Medium"
    }
  },
  {
    questionId: "70474bfb",
    externalId: "70474bfb",
    section: "Math",
    prompt: "<p>Each side of a \\\\(30\\\\)-sided polygon has one of three lengths. The number of sides with length \\\\(8\\\\) centimeters (cm) is \\\\(5\\\\) times the number \\\\(n\\\\) of sides with length \\\\(3\\\\) cm. There are \\\\(6\\\\) sides with length \\\\(4\\\\) cm. Which equation must be true for the value of \\\\(n\\\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\(5n + 6 = 30\\\\)</p>" },
        B: { body: "<p>\\\\(6n + 6 = 30\\\\)</p>" },
        C: { body: "<p>\\\\(8n + 3n + 4n = 30\\\\)</p>" },
        D: { body: "<p>\\\\(8(5n) + 3n + 4(6) = 30\\\\)</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is correct. It's given that each side of a \\\\(30\\\\)-sided polygon has one of three lengths. It's also given that the number of sides with length \\\\(8\\\\) centimeters (cm) is \\\\(5\\\\) times the number of sides with length \\\\(3\\\\) cm. Therefore, there are \\\\(5 \\times n\\\\), or \\\\(5n\\\\), sides with length \\\\(8\\\\) cm. It's also given that there are \\\\(6\\\\) sides with length \\\\(4\\\\) cm. Therefore, the number of \\\\(3\\\\) cm, \\\\(4\\\\) cm, and \\\\(8\\\\) cm sides are \\\\(n\\\\), \\\\(6\\\\), and \\\\(5n\\\\), respectively. Since there are a total of \\\\(30\\\\) sides, the equation \\\\(n + 6 + 5n = 30\\\\) represents this situation. Combining like terms on the left-hand side of this equation yields \\\\(6n + 6 = 30\\\\). Therefore, the equation that must be true for the value of \\\\(n\\\\) is \\\\(6n + 6 = 30\\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in one variable",
      difficulty: "Hard"
    }
  },
  {
    questionId: "0f1cfed0",
    externalId: "0f1cfed0",
    section: "Math",
    prompt: "<p>A candle is made of \\\\(17\\\\) ounces of wax. When the candle is burning, the amount of wax in the candle decreases by \\\\(1\\\\) ounce every \\\\(4\\\\) hours. If \\\\(6\\\\) ounces of wax remain in this candle, for how many hours has it been burning?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\(3\\\\)</p>" },
        B: { body: "<p>\\\\(6\\\\)</p>" },
        C: { body: "<p>\\\\(24\\\\)</p>" },
        D: { body: "<p>\\\\(44\\\\)</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. It's given that the candle starts with \\\\(17\\\\) ounces of wax and has \\\\(6\\\\) ounces of wax remaining after a period of time has passed. The amount of wax the candle has lost during the time period can be found by subtracting the remaining amount of wax from the amount of wax the candle was made of, which yields \\\\(17 - 6\\\\) ounces, or \\\\(11\\\\) ounces. This means the candle loses \\\\(11\\\\) ounces of wax during that period of time. It's given that the amount of wax decreases by \\\\(1\\\\) ounce every \\\\(4\\\\) hours. If \\\\(h\\\\) represents the number of hours the candle has been burning, it follows that \\\\(\\frac{1}{4} = \\frac{11}{h}\\\\). Multiplying both sides of this equation by \\\\(4h\\\\) yields \\\\(h = 44\\\\). Therefore, the candle has been burning for \\\\(44\\\\) hours.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in one variable",
      difficulty: "Medium"
    }
  },
  {
    questionId: "73a92771",
    externalId: "73a92771",
    section: "Math",
    prompt: "<p>[Graph showing two intersecting lines in xy-plane with intersection point at (4, -5)]</p><p>The graph of a system of linear equations is shown. What is the solution \\\\((x, y)\\\\) to the system?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\((4, -5)\\\\)</p>" },
        B: { body: "<p>\\\\((0, 3)\\\\)</p>" },
        C: { body: "<p>\\\\((0, -2)\\\\)</p>" },
        D: { body: "<p>\\\\((-2, 3)\\\\)</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is correct. The solution to this system of linear equations is represented by the point that lies on both lines shown, or the point of intersection of the two lines. According to the graph, the point of intersection occurs when \\\\(x = 4\\\\) and \\\\(y = -5\\\\), or at the point \\\\((4, -5)\\\\). Therefore, the solution \\\\((x, y)\\\\) to the system is \\\\((4, -5)\\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Systems of two linear equations in two variables",
      difficulty: "Easy"
    }
  },
  {
    questionId: "e0a370ba",
    externalId: "e0a370ba",
    section: "Math",
    prompt: "<p>A neighborhood consists of a \\\\(2\\\\)-hectare park and a \\\\(35\\\\)-hectare residential area. The total number of trees in the neighborhood is \\\\(3,934\\\\). The equation \\\\(2x + 35y = 3,934\\\\) represents this situation. Which of the following is the best interpretation of \\\\(x\\\\) in this context?</p>",
    answer: {
      choices: {
        A: { body: "<p>The average number of trees per hectare in the park</p>" },
        B: { body: "<p>The average number of trees per hectare in the residential area</p>" },
        C: { body: "<p>The total number of trees in the park</p>" },
        D: { body: "<p>The total number of trees in the residential area</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is correct. It's given that a neighborhood consists of a \\\\(2\\\\)-hectare park and a \\\\(35\\\\)-hectare residential area and that the total number of trees in the neighborhood is \\\\(3,934\\\\). It's also given that the equation \\\\(2x + 35y = 3,934\\\\) represents this situation. Since the total number of trees for a given area can be determined by taking the number of hectares times the average number of trees per hectare, this must mean that the terms \\\\(2x\\\\) and \\\\(35y\\\\) correspond to the number of trees in the park and in the residential area, respectively. Since \\\\(2x\\\\) corresponds to the number of trees in the park, and \\\\(2\\\\) is the size of the park, in hectares, \\\\(x\\\\) must represent the average number of trees per hectare in the park.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Medium"
    }
  },
  {
    questionId: "be844d92",
    externalId: "be844d92",
    section: "Math",
    prompt: "<p>What value of \\\\(t\\\\) is the solution to the equation \\\\(0.8t - 0.46 = 8(t - 0.001) + 1.9\\\\)?</p>",
    answer: {
      correctAnswer: "-0.3267",
      style: "Free Response",
      rationale: "<p>The correct answer is \\\\(-0.3267\\\\). Applying the distributive property to the right-hand side of the given equation yields \\\\(0.8t - 0.46 = 8t - 0.008 + 1.9\\\\), or \\\\(0.8t - 0.46 = 8t + 1.892\\\\). Subtracting \\\\(0.8t\\\\) from both sides of this equation yields \\\\(-0.46 = 7.2t + 1.892\\\\). Subtracting \\\\(1.892\\\\) from both sides of this equation yields \\\\(-2.352 = 7.2t\\\\). Dividing both sides of this equation by \\\\(7.2\\\\) yields \\\\(\\frac{-2.352}{7.2} = t\\\\). Therefore, the value of \\\\(t\\\\) is approximately \\\\(-0.32667\\\\). Note that -.3267, -.3266, -0.326, and -0.327 are examples of ways to enter a correct answer.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in one variable",
      difficulty: "Hard"
    }
  },
  {
    questionId: "0e1dbc1d",
    externalId: "0e1dbc1d",
    section: "Math",
    prompt: "<p>Line \\\\(\\ell\\\\) is defined by \\\\(3y + 12x = 5\\\\). Line \\\\(n\\\\) is perpendicular to line \\\\(\\ell\\\\) in the xy-plane. What is the slope of line \\\\(n\\\\)?</p>",
    answer: {
      correctAnswer: "0.25",
      style: "Free Response",
      rationale: "<p>The correct answer is \\\\(\\frac{1}{4}\\\\). For an equation in slope-intercept form \\\\(y = mx + b\\\\), \\\\(m\\\\) represents the slope of the line in the xy-plane defined by this equation. It's given that line \\\\(\\ell\\\\) is defined by \\\\(3y + 12x = 5\\\\). Subtracting \\\\(12x\\\\) from both sides of this equation yields \\\\(3y = -12x + 5\\\\). Dividing both sides of this equation by \\\\(3\\\\) yields \\\\(y = -\\frac{12}{3}x + \\frac{5}{3}\\\\), or \\\\(y = -4x + \\frac{5}{3}\\\\). Thus, the slope of line \\\\(\\ell\\\\) in the xy-plane is \\\\(-4\\\\). Since line \\\\(n\\\\) is perpendicular to line \\\\(\\ell\\\\) in the xy-plane, the slope of line \\\\(n\\\\) is the negative reciprocal of the slope of line \\\\(\\ell\\\\). The negative reciprocal of \\\\(-4\\\\) is \\\\(-\\frac{1}{(-4)} = \\frac{1}{4}\\\\). Note that 1/4 and .25 are examples of ways to enter a correct answer.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Hard"
    }
  },
  {
    questionId: "a400ddb4",
    externalId: "a400ddb4",
    section: "Math",
    prompt: "<p>A contract for a certain service requires a onetime activation cost of \\\\(\\$35\\\\) and a monthly cost of \\\\(\\$23\\\\). Which equation represents this situation, where \\\\(c\\\\) is the total cost, in dollars, of this service contract for \\\\(t\\\\) months?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\(c = \\frac{t}{23} + 35\\\\)</p>" },
        B: { body: "<p>\\\\(c = \\frac{t}{35} + 23\\\\)</p>" },
        C: { body: "<p>\\\\(c = 23t + 35\\\\)</p>" },
        D: { body: "<p>\\\\(c = 35t + 23\\\\)</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is correct. It's given that this service contract requires a monthly cost of \\\\(\\$23\\\\). A monthly cost of \\\\(\\$23\\\\) for \\\\(t\\\\) months results in a cost of \\\\(\\$23t\\\\). It's also given that this service contract requires a onetime activation cost of \\\\(\\$35\\\\). Adding the onetime activation cost to the monthly cost of the service contract for \\\\(t\\\\) months yields the total cost \\\\(c\\\\), in dollars, of this service contract for \\\\(t\\\\) months. Therefore, this situation can be represented by the equation \\\\(c = 23t + 35\\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Easy"
    }
  },
  {
    questionId: "c5380c0c",
    externalId: "c5380c0c",
    section: "Math",
    prompt: "<p>The total cost, in dollars, to rent a surfboard consists of a \\\\(\\$25\\\\) service fee and a \\\\(\\$10\\\\) per hour rental fee. A person rents a surfboard for \\\\(t\\\\) hours and intends to spend a maximum of \\\\(\\$75\\\\) to rent the surfboard. Which inequality represents this situation?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\(10t \\le 75\\\\)</p>" },
        B: { body: "<p>\\\\(10 + 25t \\le 75\\\\)</p>" },
        C: { body: "<p>\\\\(25t \\le 75\\\\)</p>" },
        D: { body: "<p>\\\\(25 + 10t \\le 75\\\\)</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. The cost of the rental fee depends on the number of hours the surfboard is rented. Multiplying \\\\(t\\\\) hours by \\\\(\\$10\\\\) dollars per hour yields a rental fee of \\\\(10t\\\\) dollars. The total cost of the rental consists of the rental fee plus the \\\\(\\$25\\\\) dollar service fee, which yields a total cost of \\\\(25 + 10t\\\\) dollars. Since the person intends to spend a maximum of \\\\(\\$75\\\\) dollars to rent the surfboard, the total cost must be at most \\\\(\\$75\\\\) dollars. Therefore, the inequality \\\\(25 + 10t \\le 75\\\\) represents this situation.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear inequalities in one or two variables",
      difficulty: "Easy"
    }
  },
  {
    questionId: "ebbc00fb",
    externalId: "ebbc00fb",
    section: "Math",
    prompt: "<p>\\\\[y = -\\frac{1}{9}x\\\\]\\\\[y = \\frac{1}{2}x\\\\]</p><p>The solution to the given system of equations is \\\\((x, y)\\\\). What is the value of \\\\(x\\\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\(-9\\\\)</p>" },
        B: { body: "<p>\\\\(-7\\\\)</p>" },
        C: { body: "<p>\\\\(0\\\\)</p>" },
        D: { body: "<p>\\\\(2\\\\)</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is correct. It's given by the first equation in the system that \\\\(y = -\\frac{1}{9}x\\\\). Substituting \\\\(-\\frac{1}{9}x\\\\) for \\\\(y\\\\) in the second equation in the system yields \\\\(-\\frac{1}{9}x = \\frac{1}{2}x\\\\). Multiplying the left-hand side of this equation by \\\\(\\frac{2}{2}\\\\) and the right-hand side by \\\\(\\frac{9}{9}\\\\) yields \\\\(-\\frac{2}{18}x = \\frac{9}{18}x\\\\). Adding \\\\(\\frac{2}{18}x\\\\) to both sides of this equation yields \\\\(0 = \\frac{11}{18}x\\\\). Multiplying both sides of this equation by \\\\(\\frac{18}{11}\\\\) yields \\\\(x = 0\\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Systems of two linear equations in two variables",
      difficulty: "Medium"
    }
  },
  {
    questionId: "46eabc75",
    externalId: "46eabc75",
    section: "Math",
    prompt: "<p>A manager is responsible for ordering supplies for a shaved ice shop. The shop's inventory starts with \\\\(4,500\\\\) paper cups, and the manager estimates that \\\\(70\\\\) of these paper cups are used each day. Based on this estimate, in how many days will the supply of paper cups reach \\\\(1,700\\\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\(20\\\\)</p>" },
        B: { body: "<p>\\\\(40\\\\)</p>" },
        C: { body: "<p>\\\\(60\\\\)</p>" },
        D: { body: "<p>\\\\(80\\\\)</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is correct. It's given that the shop's inventory starts with \\\\(4,500\\\\) paper cups and that the manager estimates that \\\\(70\\\\) of these paper cups are used each day. Let \\\\(x\\\\) represent the number of days in which the estimated supply of paper cups will reach \\\\(1,700\\\\). The equation \\\\(4,500 - 70x = 1,700\\\\) represents this situation. Subtracting \\\\(4,500\\\\) from both sides of this equation yields \\\\(-70x = -2,800\\\\). Dividing both sides of this equation by \\\\(-70\\\\) yields \\\\(x = 40\\\\). Therefore, based on this estimate, the supply of paper cups will reach \\\\(1,700\\\\) in \\\\(40\\\\) days.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in one variable",
      difficulty: "Easy"
    }
  },
  {
    questionId: "977935fa",
    externalId: "977935fa",
    section: "Math",
    prompt: "<p>The y-intercept of the graph of \\\\(y = -6x - 32\\\\) in the xy-plane is \\\\((0, y)\\\\). What is the value of \\\\(y\\\\)?</p>",
    answer: {
      correctAnswer: "-32",
      style: "Free Response",
      rationale: "<p>The correct answer is \\\\(-32\\\\). It's given that the y-intercept of the graph of \\\\(y = -6x - 32\\\\) is \\\\((0, y)\\\\). Substituting \\\\(0\\\\) for \\\\(x\\\\) in this equation yields \\\\(y = -6(0) - 32\\\\), or \\\\(y = -32\\\\). Therefore, the value of \\\\(y\\\\) that corresponds to the y-intercept of the graph of \\\\(y = -6x - 32\\\\) in the xy-plane is \\\\(-32\\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Easy"
    }
  },
  {
    questionId: "10df349c",
    externalId: "10df349c",
    section: "Math",
    prompt: "<p>One gallon of stain will cover \\\\(170\\\\) square feet of a surface. A yard has a total fence area of \\\\(w\\\\) square feet. Which equation represents the total amount of stain \\\\(S\\\\), in gallons, needed to stain the fence in this yard twice?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\(S = \\frac{w}{170}\\\\)</p>" },
        B: { body: "<p>\\\\(S = 170w\\\\)</p>" },
        C: { body: "<p>\\\\(S = 340w\\\\)</p>" },
        D: { body: "<p>\\\\(S = \\frac{w}{85}\\\\)</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. It's given that \\\\(w\\\\) represents the total fence area, in square feet. Since the fence will be stained twice, the amount of stain, in gallons, will need to cover \\\\(2w\\\\) square feet. It's also given that one gallon of stain will cover \\\\(170\\\\) square feet. Dividing the total area, in square feet, of the surface to be stained by the number of square feet covered by one gallon of stain gives the number of gallons of stain that will be needed. Dividing \\\\(2w\\\\) by \\\\(170\\\\) yields \\\\(\\frac{2w}{170}\\\\), or \\\\(\\frac{w}{85}\\\\). Therefore, the equation that represents the total amount of stain \\\\(S\\\\), in gallons, needed to stain the fence of the yard twice is \\\\(S = \\frac{w}{85}\\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Hard"
    }
  },
  {
    questionId: "b2c1a14d",
    externalId: "b2c1a14d",
    section: "Math",
    prompt: "<p>\\\\[y = \\frac{2}{7}x + 3\\\\]</p><p>One of the two equations in a system of linear equations is given. The system has infinitely many solutions. If the second equation in the system is \\\\(y = mx + b\\\\), where \\\\(m\\\\) and \\\\(b\\\\) are constants, what is the value of \\\\(b\\\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\(-3\\\\)</p>" },
        B: { body: "<p>\\\\(-\\frac{1}{3}\\\\)</p>" },
        C: { body: "<p>\\\\(\\frac{1}{3}\\\\)</p>" },
        D: { body: "<p>\\\\(3\\\\)</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. It's given that the system has infinitely many solutions. The graphs of two lines in the xy-plane represented by equations in slope-intercept form, \\\\(y = mx + b\\\\), where \\\\(m\\\\) and \\\\(b\\\\) are constants, have infinitely many solutions if their slopes, \\\\(m\\\\), are the same and if their y-coordinates of the y-intercepts, \\\\(b\\\\), are also the same. The first equation in the given system is \\\\(y = \\frac{2}{7}x + 3\\\\). For this equation, the slope is \\\\(\\frac{2}{7}\\\\) and the y-coordinate of the y-intercept is \\\\(3\\\\). If the second equation is in the form \\\\(y = mx + b\\\\), then for the two equations to be equivalent, the values of \\\\(m\\\\) and \\\\(b\\\\) in the second equation must equal the corresponding values in the first equation. Therefore, the second equation must have a slope, \\\\(m\\\\), of \\\\(\\frac{2}{7}\\\\), and a y-coordinate of the y-intercept, \\\\(b\\\\), of \\\\(3\\\\). Thus, the value of \\\\(b\\\\) is \\\\(3\\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Systems of two linear equations in two variables",
      difficulty: "Medium"
    }
  },
  {
    questionId: "68e48b4c",
    externalId: "68e48b4c",
    section: "Math",
    prompt: "<p>For the function \\\\(f\\\\), \\\\(f(cx) = x - 8\\\\) for all values of \\\\(x\\\\), where \\\\(c\\\\) is a positive constant. If \\\\(f(2) = 35\\\\), what is the value of \\\\(c\\\\)?</p>",
    answer: {
      correctAnswer: "0.0465",
      style: "Free Response",
      rationale: "<p>The correct answer is \\\\(\\frac{2}{43}\\\\). It's given that \\\\(f(cx) = x - 8\\\\) for all values of \\\\(x\\\\), where \\\\(c\\\\) is a positive constant, and \\\\(f(2) = 35\\\\). Therefore, for the given function \\\\(f\\\\), \\\\(cx = 2\\\\). Dividing both sides of this equation by \\\\(c\\\\) yields \\\\(x = \\frac{2}{c}\\\\). Substituting \\\\(\\frac{2}{c}\\\\) for \\\\(x\\\\) in the equation \\\\(f(cx) = x - 8\\\\) yields \\\\(f\\left(\\frac{2c}{c}\\right) = \\frac{2}{c} - 8\\\\), or \\\\(f(2) = \\frac{2}{c} - 8\\\\). Since it's given that \\\\(f(2) = 35\\\\), substituting \\\\(35\\\\) for \\\\(f(2)\\\\) yields \\\\(35 = \\frac{2}{c} - 8\\\\). Adding \\\\(8\\\\) to both sides of this equation yields \\\\(43 = \\frac{2}{c}\\\\). Multiplying both sides of this equation by \\\\(c\\\\) yields \\\\(43c = 2\\\\). Dividing both sides of this equation by \\\\(43\\\\) yields \\\\(c = \\frac{2}{43}\\\\). Note that 2/43, .0465, 0.046, and 0.047 are examples of ways to enter a correct answer.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Hard"
    }
  },
  {
    questionId: "831c2cb3",
    externalId: "831c2cb3",
    section: "Math",
    prompt: "<p>The point \\\\((8, 2)\\\\) in the xy-plane is a solution to which of the following systems of inequalities?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\(x > 0\\\\)<br/>\\\\(y > 0\\\\)</p>" },
        B: { body: "<p>\\\\(x > 0\\\\)<br/>\\\\(y < 0\\\\)</p>" },
        C: { body: "<p>\\\\(x < 0\\\\)<br/>\\\\(y > 0\\\\)</p>" },
        D: { body: "<p>\\\\(x < 0\\\\)<br/>\\\\(y < 0\\\\)</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is correct. The given point, \\\\((8, 2)\\\\), is located in the first quadrant in the xy-plane. The system of inequalities in choice A represents all the points in the first quadrant in the xy-plane. Therefore, \\\\((8, 2)\\\\) is a solution to the system of inequalities in choice A.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear inequalities in one or two variables",
      difficulty: "Easy"
    }
  },
  {
    questionId: "d55d1acd",
    externalId: "d55d1acd",
    section: "Math",
    prompt: "<p>If \\\\(\\frac{x-5}{7} = \\frac{x-5}{9}\\\\), the value of \\\\(x - 5\\\\) is between which of the following pairs of values?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\(-9\\\\) and \\\\(-7\\\\)</p>" },
        B: { body: "<p>\\\\(-3\\\\) and \\\\(3\\\\)</p>" },
        C: { body: "<p>\\\\(4.5\\\\) and \\\\(5.5\\\\)</p>" },
        D: { body: "<p>\\\\(6.75\\\\) and \\\\(9.25\\\\)</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is correct. Multiplying both sides of the given equation by \\\\((7)(9)\\\\), or \\\\(63\\\\), yields \\\\((63)\\left(\\frac{x-5}{7}\\right) = (63)\\left(\\frac{x-5}{9}\\right)\\\\), or \\\\(9(x - 5) = 7(x - 5)\\\\). Subtracting \\\\(7(x - 5)\\\\) from both sides of this equation yields \\\\(2(x - 5) = 0\\\\). Dividing both sides of this equation by \\\\(2\\\\) yields \\\\(x - 5 = 0\\\\). Therefore, if \\\\(\\frac{x-5}{7} = \\frac{x-5}{9}\\\\), then the value of \\\\(x - 5\\\\) is \\\\(0\\\\). It follows that of the given choices, the value of \\\\(x - 5\\\\) is between \\\\(-3\\\\) and \\\\(3\\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in one variable",
      difficulty: "Hard"
    }
  },
  {
    questionId: "1f976ac6",
    externalId: "1f976ac6",
    section: "Math",
    prompt: "<p>The function \\\\(f\\\\) is defined by \\\\(f(x) = -3x + 60\\\\). What is the value of \\\\(f(x)\\\\) when \\\\(x = -8\\\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\(49\\\\)</p>" },
        B: { body: "<p>\\\\(52\\\\)</p>" },
        C: { body: "<p>\\\\(57\\\\)</p>" },
        D: { body: "<p>\\\\(84\\\\)</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. The value of \\\\(f(x)\\\\) when \\\\(x = -8\\\\) can be found by substituting \\\\(-8\\\\) for \\\\(x\\\\) in the given function. This yields \\\\(f(-8) = -3(-8) + 60\\\\), or \\\\(f(-8) = 84\\\\). Therefore, when \\\\(x = -8\\\\), the value of \\\\(f(x)\\\\) is \\\\(84\\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Easy"
    }
  },
  {
    questionId: "f0684572",
    externalId: "f0684572",
    section: "Math",
    prompt: "<p>\\\\[k + 12 = 336\\\\]</p><p>What is the solution to the given equation?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\(28\\\\)</p>" },
        B: { body: "<p>\\\\(324\\\\)</p>" },
        C: { body: "<p>\\\\(348\\\\)</p>" },
        D: { body: "<p>\\\\(4,032\\\\)</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is correct. Subtracting \\\\(12\\\\) from both sides of the given equation yields \\\\(k = 324\\\\). Therefore, the solution to the given equation is \\\\(324\\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in one variable",
      difficulty: "Easy"
    }
  },
  {
    questionId: "2a366aeb",
    externalId: "2a366aeb",
    section: "Math",
    prompt: "<p>A manufacturing plant makes \\\\(10\\\\)-inch, \\\\(9\\\\)-inch, and \\\\(7\\\\)-inch frying pans. During a certain day, the number of \\\\(10\\\\)-inch frying pans that the manufacturing plant makes is \\\\(4\\\\) times the number \\\\(n\\\\) of \\\\(9\\\\)-inch frying pans it makes, and the number of \\\\(7\\\\)-inch frying pans it makes is \\\\(10\\\\). During this day, the manufacturing plant makes \\\\(100\\\\) frying pans total. Which equation represents this situation?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\(10(4n) + 9n + 7(10) = 100\\\\)</p>" },
        B: { body: "<p>\\\\(10n + 9n + 7n = 100\\\\)</p>" },
        C: { body: "<p>\\\\(4n + 10 = 100\\\\)</p>" },
        D: { body: "<p>\\\\(5n + 10 = 100\\\\)</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. It's given that during a certain day, the number of \\\\(9\\\\)-inch frying pans the manufacturing plant makes is \\\\(n\\\\) and the number of \\\\(7\\\\)-inch frying pans it makes is \\\\(10\\\\). It's also given that during this day the number of \\\\(10\\\\)-inch frying pans that the manufacturing plant makes is \\\\(4\\\\) times the number of \\\\(9\\\\)-inch frying pans, or \\\\(4n\\\\). Therefore, the total number of \\\\(7\\\\)-inch, \\\\(9\\\\)-inch, and \\\\(10\\\\)-inch frying pans the manufacturing plant makes is \\\\(n + 10 + 4n\\\\), or \\\\(5n + 10\\\\). It's given that during this day the manufacturing plant makes \\\\(100\\\\) frying pans total. Thus, the equation \\\\(5n + 10 = 100\\\\) represents this situation.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in one variable",
      difficulty: "Hard"
    }
  },
  {
    questionId: "6f8503f0",
    externalId: "6f8503f0",
    section: "Math",
    prompt: "<p>A particular botanist classifies a species of plant as tall if its typical height when fully grown is more than \\\\(100\\\\) centimeters. Each of the following inequalities represents the possible heights \\\\(h\\\\), in centimeters, for a specific plant species when fully grown. Which inequality represents the possible heights \\\\(h\\\\), in centimeters, for a tall plant species?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\(106 < h < 158\\\\)</p>" },
        B: { body: "<p>\\\\(80 < h < 100\\\\)</p>" },
        C: { body: "<p>\\\\(42 < h < 87\\\\)</p>" },
        D: { body: "<p>\\\\(17 < h < 85\\\\)</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is correct. It's given that a particular botanist classifies a species of plant as tall if its typical height when fully grown is more than \\\\(100\\\\) centimeters. The inequality \\\\(106 < h < 158\\\\) represents possible heights \\\\(h\\\\), in centimeters, for a plant species when fully grown where \\\\(h\\\\) is between \\\\(106\\\\) and \\\\(158\\\\) centimeters. Since all values of \\\\(h\\\\) in this inequality are greater than \\\\(100\\\\) centimeters, this inequality represents the possible heights for a tall plant species.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear inequalities in one or two variables",
      difficulty: "Medium"
    }
  },
  {
    questionId: "0b28166c",
    externalId: "0b28166c",
    section: "Math",
    prompt: "<p>[Graph showing two intersecting lines in xy-plane with intersection point at (8, 2)]</p><p>If a new graph of three linear equations is created using the system of equations shown and the equation \\\\(x + 4y = -16\\\\), how many solutions \\\\((x, y)\\\\) will the resulting system of three equations have?</p>",
    answer: {
      choices: {
        A: { body: "<p>Zero</p>" },
        B: { body: "<p>Exactly one</p>" },
        C: { body: "<p>Exactly two</p>" },
        D: { body: "<p>Infinitely many</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is correct. A solution to a system of equations must satisfy each equation in the system. It follows that if an ordered pair \\\\((x, y)\\\\) is a solution to the system, the point \\\\((x, y)\\\\) lies on the graph in the xy-plane of each equation in the system. The only point that lies on each graph of the system of two linear equations shown is their intersection point \\\\((8, 2)\\\\). It follows that if a new graph of three linear equations is created using the system of equations shown and the graph of \\\\(x + 4y = -16\\\\), this system has either zero solutions or one solution, the point \\\\((8, 2)\\\\). Substituting \\\\(8\\\\) for \\\\(x\\\\) and \\\\(2\\\\) for \\\\(y\\\\) in the equation \\\\(x + 4y = -16\\\\) yields \\\\(8 + 4(2) = -16\\\\), or \\\\(16 = -16\\\\). Since this equation is not true, the point \\\\((8, 2)\\\\) does not lie on the graph of \\\\(x + 4y = -16\\\\). Therefore, \\\\((8, 2)\\\\) is not a solution to the system of three equations. It follows that there are zero solutions to this system.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Systems of two linear equations in two variables",
      difficulty: "Hard"
    }
  },
  {
    questionId: "8e53811f",
    externalId: "8e53811f",
    section: "Math",
    prompt: "<p>\\\\[w(t) = 300 - 4t\\\\]</p><p>The function \\\\(w\\\\) models the volume of liquid, in milliliters, in a container \\\\(t\\\\) seconds after it begins draining from a hole at the bottom. According to the model, what is the predicted volume, in milliliters, draining from the container each second?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\(300\\\\)</p>" },
        B: { body: "<p>\\\\(296\\\\)</p>" },
        C: { body: "<p>\\\\(75\\\\)</p>" },
        D: { body: "<p>\\\\(4\\\\)</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. It's given that the function \\\\(w\\\\) models the volume of liquid, in milliliters, in a container \\\\(t\\\\) seconds after it begins draining from a hole at the bottom. The given function \\\\(w(t) = 300 - 4t\\\\) can be rewritten as \\\\(w(t) = -4t + 300\\\\). Thus, for each increase of \\\\(t\\\\) by \\\\(1\\\\), the value of \\\\(w(t)\\\\) decreases by \\\\(4(1)\\\\), or \\\\(4\\\\). Therefore, the predicted volume, in milliliters, draining from the container each second is \\\\(4\\\\) milliliters.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Medium"
    }
  },
  {
    questionId: "29dee068",
    externalId: "29dee068",
    section: "Math",
    prompt: "<p>\\\\[\\frac{1}{3}(x + 6) - \\frac{1}{2}(x + 6) = -8\\\\]</p><p>What value of \\\\(x\\\\) is the solution to the given equation?</p>",
    answer: {
      correctAnswer: "42",
      style: "Free Response",
      rationale: "<p>The correct answer is \\\\(42\\\\). The expression \\\\((x + 6)\\\\) is a factor of both terms on the left-hand side of the given equation. Therefore, the given equation can be written as \\\\((x + 6)\\left(\\frac{1}{3} - \\frac{1}{2}\\right) = -8\\\\), or \\\\((x + 6)\\left(-\\frac{1}{6}\\right) = -8\\\\). Multiplying each side of this equation by \\\\(-6\\\\) yields \\\\(x + 6 = 48\\\\). Subtracting \\\\(6\\\\) from each side of this equation yields \\\\(x = 42\\\\). Therefore, the value of \\\\(x\\\\) that is the solution to the given equation is \\\\(42\\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in one variable",
      difficulty: "Medium"
    }
  },
  {
    questionId: "7a83c8d8",
    externalId: "7a83c8d8",
    section: "Math",
    prompt: "<p>Kaylani used fabric measuring \\\\(5\\\\) yards in length to make each suit for a men's choir. The relationship between the number of suits that Kaylani made, \\\\(x\\\\), and the total length of fabric that she purchased \\\\(y\\\\), in yards, is represented by the equation \\\\(y - 5x = 6\\\\). What is the best interpretation of \\\\(6\\\\) in this context?</p>",
    answer: {
      choices: {
        A: { body: "<p>Kaylani made \\\\(6\\\\) suits.</p>" },
        B: { body: "<p>Kaylani purchased a total of \\\\(6\\\\) yards of fabric.</p>" },
        C: { body: "<p>Kaylani used a total of \\\\(6\\\\) yards of fabric to make the suits.</p>" },
        D: { body: "<p>Kaylani purchased \\\\(6\\\\) yards more fabric than she used to make the suits.</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. It's given that the equation \\\\(y - 5x = 6\\\\) represents the relationship between the number of suits that Kaylani made, \\\\(x\\\\), and the total length of fabric she purchased, \\\\(y\\\\), in yards. Adding \\\\(5x\\\\) to both sides of the given equation yields \\\\(y = 5x + 6\\\\). Since Kaylani made \\\\(x\\\\) suits and used \\\\(5\\\\) yards of fabric to make each suit, the expression \\\\(5x\\\\) represents the total amount of fabric she used to make the suits. Since \\\\(y\\\\) represents the total length of fabric Kaylani purchased, in yards, it follows from the equation \\\\(y = 5x + 6\\\\) that Kaylani purchased \\\\(5x\\\\) yards of fabric to make the suits, plus an additional \\\\(6\\\\) yards of fabric. Therefore, the best interpretation of \\\\(6\\\\) in this context is that Kaylani purchased \\\\(6\\\\) yards more fabric than she used to make the suits.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Hard"
    }
  },
  {
    questionId: "9b6c20fe",
    externalId: "9b6c20fe",
    section: "Math",
    prompt: "<p>The function \\\\(f\\\\) is defined by \\\\(f(x) = 7x - 84\\\\). What is the x-intercept of the graph of \\\\(y = f(x)\\\\) in the xy-plane?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\((-12, 0)\\\\)</p>" },
        B: { body: "<p>\\\\((-7, 0)\\\\)</p>" },
        C: { body: "<p>\\\\((7, 0)\\\\)</p>" },
        D: { body: "<p>\\\\((12, 0)\\\\)</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. The given function \\\\(f\\\\) is a linear function. Therefore, the graph of \\\\(y = f(x)\\\\) in the xy-plane has one x-intercept at the point \\\\((k, 0)\\\\), where \\\\(k\\\\) is a constant. Substituting \\\\(0\\\\) for \\\\(f(x)\\\\) and \\\\(k\\\\) for \\\\(x\\\\) in the given function yields \\\\(0 = 7k - 84\\\\). Adding \\\\(84\\\\) to both sides of this equation yields \\\\(84 = 7k\\\\). Dividing both sides of this equation by \\\\(7\\\\) yields \\\\(12 = k\\\\). Therefore, the x-intercept of the graph of \\\\(y = f(x)\\\\) in the xy-plane is \\\\((12, 0)\\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Medium"
    }
  },
  {
    questionId: "d79caaad",
    externalId: "d79caaad",
    section: "Math",
    prompt: "<p>The combined original price for a mirror and a vase is \\\\(\\$60\\\\). After a \\\\(25\\%\\\\) discount to the mirror and a \\\\(45\\%\\\\) discount to the vase are applied, the combined sale price for the two items is \\\\(\\$39\\\\). Which system of equations gives the original price \\\\(m\\\\), in dollars, of the mirror and the original price \\\\(v\\\\), in dollars, of the vase?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\(m + v = 60\\\\)<br/>\\\\(0.55m + 0.75v = 39\\\\)</p>" },
        B: { body: "<p>\\\\(m + v = 60\\\\)<br/>\\\\(0.45m + 0.25v = 39\\\\)</p>" },
        C: { body: "<p>\\\\(m + v = 60\\\\)<br/>\\\\(0.75m + 0.55v = 39\\\\)</p>" },
        D: { body: "<p>\\\\(m + v = 60\\\\)<br/>\\\\(0.25m + 0.45v = 39\\\\)</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is correct. It's given that \\\\(m\\\\) represents the original price, in dollars, of the mirror, and \\\\(v\\\\) represents the original price, in dollars, of the vase. It's also given that the combined original price for the mirror and the vase is \\\\(\\$60\\\\). This can be represented by the equation \\\\(m + v = 60\\\\). After a \\\\(25\\%\\\\) discount to the mirror is applied, the sale price of the mirror is \\\\(75\\%\\\\) of its original price. This can be represented by the expression \\\\(0.75m\\\\). After a \\\\(45\\%\\\\) discount to the vase is applied, the sale price of the vase is \\\\(55\\%\\\\) of its original price. This can be represented by the expression \\\\(0.55v\\\\). It's given that the combined sale price for the two items is \\\\(\\$39\\\\). This can be represented by the equation \\\\(0.75m + 0.55v = 39\\\\). Therefore, the system of equations consisting of the equations \\\\(m + v = 60\\\\) and \\\\(0.75m + 0.55v = 39\\\\) gives the original price \\\\(m\\\\), in dollars, of the mirror and the original price \\\\(v\\\\), in dollars, of the vase.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Systems of two linear equations in two variables",
      difficulty: "Medium"
    }
  },
  {
    questionId: "698ab51d",
    externalId: "698ab51d",
    section: "Math",
    prompt: "<p>[Graph showing shaded region in xy-plane representing solutions to an inequality]</p><p>The shaded region shown represents the solutions to an inequality. Which ordered pair \\\\((x, y)\\\\) is a solution to this inequality?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\((-5, -6)\\\\)</p>" },
        B: { body: "<p>\\\\((-2, 5)\\\\)</p>" },
        C: { body: "<p>\\\\((1, 4)\\\\)</p>" },
        D: { body: "<p>\\\\((6, -2)\\\\)</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. Since the shaded region shown represents the solutions to an inequality, an ordered pair \\\\((x, y)\\\\) is a solution to the inequality if it's represented by a point in the shaded region. Of the given choices, only \\\\((6, -2)\\\\) is represented by a point in the shaded region. Therefore, the ordered pair \\\\((6, -2)\\\\) is a solution to this inequality.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear inequalities in one or two variables",
      difficulty: "Medium"
    }
  },
  {
    questionId: "652119ce",
    externalId: "652119ce",
    section: "Math",
    prompt: "<p>The functions \\\\(f\\\\) and \\\\(g\\\\) are defined as \\\\(f(x) = \\frac{1}{4}x - 9\\\\) and \\\\(g(x) = \\frac{3}{4}x + 21\\\\). If the function \\\\(h\\\\) is defined as \\\\(h(x) = f(x) + g(x)\\\\), what is the x-coordinate of the x-intercept of the graph of \\\\(y = h(x)\\\\) in the xy-plane?</p>",
    answer: {
      correctAnswer: "-12",
      style: "Free Response",
      rationale: "<p>The correct answer is \\\\(-12\\\\). It's given that the functions \\\\(f\\\\) and \\\\(g\\\\) are defined as \\\\(f(x) = \\frac{1}{4}x - 9\\\\) and \\\\(g(x) = \\frac{3}{4}x + 21\\\\). If the function \\\\(h\\\\) is defined as \\\\(h(x) = f(x) + g(x)\\\\), then substituting \\\\(\\frac{1}{4}x - 9\\\\) for \\\\(f(x)\\\\) and \\\\(\\frac{3}{4}x + 21\\\\) for \\\\(g(x)\\\\) in this function yields \\\\(h(x) = \\frac{1}{4}x - 9 + \\frac{3}{4}x + 21\\\\). This can be rewritten as \\\\(h(x) = \\frac{4}{4}x + 12\\\\), or \\\\(h(x) = x + 12\\\\). The x-intercept of a graph in the xy-plane is the point on the graph where \\\\(y = 0\\\\). The equation representing the graph of \\\\(y = h(x)\\\\) is \\\\(y = x + 12\\\\). Substituting \\\\(0\\\\) for \\\\(y\\\\) in this equation yields \\\\(0 = x + 12\\\\). Subtracting \\\\(12\\\\) from both sides of this equation yields \\\\(-12 = x\\\\), or \\\\(x = -12\\\\). Therefore, the x-coordinate of the x-intercept of the graph of \\\\(y = h(x)\\\\) in the xy-plane is \\\\(-12\\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Hard"
    }
  },
  {
    questionId: "81c05538",
    externalId: "81c05538",
    section: "Math",
    prompt: "<p>\\\\[-15x + 25y = 65\\\\]</p><p>One of the two equations in a system of linear equations is given. The system has infinitely many solutions. Which of the following could be the second equation in the system?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\(12x + 20y = 52\\\\)</p>" },
        B: { body: "<p>\\\\(12x + 20y = -52\\\\)</p>" },
        C: { body: "<p>\\\\(-12x + 20y = 52\\\\)</p>" },
        D: { body: "<p>\\\\(-12x + 20y = -52\\\\)</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is correct. It's given that the system has infinitely many solutions. A system of two linear equations has infinitely many solutions when the two linear equations are equivalent. Dividing both sides of the given equation by \\\\(5\\\\) yields \\\\(-3x + 5y = 13\\\\). Dividing both sides of choice C by \\\\(4\\\\) also yields \\\\(-3x + 5y = 13\\\\), so choice C is equivalent to the given equation. Thus, choice C could be the second equation in the system.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Systems of two linear equations in two variables",
      difficulty: "Medium"
    }
  },
  {
    questionId: "c319a5eb",
    externalId: "c319a5eb",
    section: "Math",
    prompt: "<p>In the xy-plane, the graph of the linear function \\\\(f\\\\) contains the points \\\\((0, 2)\\\\) and \\\\((8, 34)\\\\). Which equation defines \\\\(f\\\\), where \\\\(y = f(x)\\\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\(f(x) = 2x + 42\\\\)</p>" },
        B: { body: "<p>\\\\(f(x) = 32x + 36\\\\)</p>" },
        C: { body: "<p>\\\\(f(x) = 4x + 2\\\\)</p>" },
        D: { body: "<p>\\\\(f(x) = 8x + 2\\\\)</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is correct. In the xy-plane, the graph of a linear function can be written in the form \\\\(f(x) = mx + b\\\\), where \\\\(m\\\\) represents the slope and \\\\((0, b)\\\\) represents the y-intercept of the graph of \\\\(y = f(x)\\\\). It's given that the graph of the linear function \\\\(f\\\\), where \\\\(y = f(x)\\\\), in the xy-plane contains the point \\\\((0, 2)\\\\). Thus, \\\\(b = 2\\\\). The slope of the graph of a line containing any two points \\\\((x_1, y_1)\\\\) and \\\\((x_2, y_2)\\\\) can be found using the slope formula, \\\\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\\\). Since it's given that the graph of the linear function \\\\(f\\\\) contains the points \\\\((0, 2)\\\\) and \\\\((8, 34)\\\\), it follows that the slope of the graph of the line containing these points is \\\\(m = \\frac{34 - 2}{8 - 0}\\\\), or \\\\(m = 4\\\\). Substituting \\\\(4\\\\) for \\\\(m\\\\) and \\\\(2\\\\) for \\\\(b\\\\) in \\\\(f(x) = mx + b\\\\) yields \\\\(f(x) = 4x + 2\\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Medium"
    }
  },
  {
    questionId: "78cad658",
    externalId: "78cad658",
    section: "Math",
    prompt: "<p>Nasir bought \\\\(9\\\\) storage bins that were each the same price. He used a coupon for \\\\(\\$63\\\\) off the entire purchase. The cost for the entire purchase after using the coupon was \\\\(\\$27\\\\). What was the original price, in dollars, for \\\\(1\\\\) storage bin?</p>",
    answer: {
      correctAnswer: "10",
      style: "Free Response",
      rationale: "<p>The correct answer is \\\\(10\\\\). It's given that the cost for the entire purchase was \\\\(\\$27\\\\) after a coupon was used for \\\\(\\$63\\\\) off the entire purchase. Adding the amount of the coupon to the purchase price yields \\\\(27 + 63 = 90\\\\). Thus, the cost for the entire purchase before using the coupon was \\\\(\\$90\\\\). It's given that Nasir bought \\\\(9\\\\) storage bins. The original price for \\\\(1\\\\) storage bin can be found by dividing the total cost by \\\\(9\\\\). Therefore, the original price, in dollars, for \\\\(1\\\\) storage bin is \\\\(\\frac{90}{9}\\\\), or \\\\(10\\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in one variable",
      difficulty: "Easy"
    }
  },
  {
    questionId: "b9a1b79d",
    externalId: "b9a1b79d",
    section: "Math",
    prompt: "<p>If \\\\(x = 7\\\\), what is the value of \\\\(x + 20\\\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\(13\\\\)</p>" },
        B: { body: "<p>\\\\(20\\\\)</p>" },
        C: { body: "<p>\\\\(27\\\\)</p>" },
        D: { body: "<p>\\\\(34\\\\)</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is correct. It's given that \\\\(x = 7\\\\). Substituting \\\\(7\\\\) for \\\\(x\\\\) into the given expression \\\\(x + 20\\\\) yields \\\\(7 + 20\\\\), which is equivalent to \\\\(27\\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in one variable",
      difficulty: "Easy"
    }
  },
  {
    questionId: "8f9ba995",
    externalId: "8f9ba995",
    section: "Math",
    prompt: "<p>\\\\[-12x + 14y = 36\\\\]\\\\[-6x + 7y = -18\\\\]</p><p>How many solutions does the given system of equations have?</p>",
    answer: {
      choices: {
        A: { body: "<p>Exactly one</p>" },
        B: { body: "<p>Exactly two</p>" },
        C: { body: "<p>Infinitely many</p>" },
        D: { body: "<p>Zero</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. A system of two linear equations in two variables, \\\\(x\\\\) and \\\\(y\\\\), has zero solutions if the lines representing the equations in the xy-plane are distinct and parallel. Two lines are distinct and parallel if they have the same slope but different y-intercepts. Each equation in the given system can be written in slope-intercept form \\\\(y = mx + b\\\\), where \\\\(m\\\\) is the slope of the line representing the equation in the xy-plane and \\\\(b\\\\) is the y-intercept. Adding \\\\(12x\\\\) to both sides of the first equation in the given system of equations, \\\\(-12x + 14y = 36\\\\), yields \\\\(14y = 12x + 36\\\\). Dividing both sides of this equation by \\\\(14\\\\) yields \\\\(y = \\frac{6}{7}x + \\frac{18}{7}\\\\). It follows that the first equation in the given system of equations has a slope of \\\\(\\frac{6}{7}\\\\) and a y-intercept of \\\\(\\left(0, \\frac{18}{7}\\right)\\\\). Adding \\\\(6x\\\\) to both sides of the second equation in the given system of equations, \\\\(-6x + 7y = -18\\\\), yields \\\\(7y = 6x - 18\\\\). Dividing both sides of this equation by \\\\(7\\\\) yields \\\\(y = \\frac{6}{7}x - \\frac{18}{7}\\\\). It follows that the second equation in the given system of equations has a slope of \\\\(\\frac{6}{7}\\\\) and a y-intercept of \\\\(\\left(0, -\\frac{18}{7}\\right)\\\\). Since the slopes of these lines are the same and the y-intercepts are different, it follows that the given system of equations has zero solutions.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Systems of two linear equations in two variables",
      difficulty: "Hard"
    }
  },
  {
    questionId: "bdd782e9",
    externalId: "bdd782e9",
    section: "Math",
    prompt: "<p>\\\\[y > 7x - 4\\\\]</p><p>For which of the following tables are all the values of \\\\(x\\\\) and their corresponding values of \\\\(y\\\\) solutions to the given inequality?</p>",
    answer: {
      choices: {
        A: { body: "<p>Table with: \\\\(x = 3, y = 13\\\\); \\\\(x = 5, y = 27\\\\); \\\\(x = 8, y = 48\\\\)</p>" },
        B: { body: "<p>Table with: \\\\(x = 3, y = 17\\\\); \\\\(x = 5, y = 31\\\\); \\\\(x = 8, y = 52\\\\)</p>" },
        C: { body: "<p>Table with: \\\\(x = 3, y = 21\\\\); \\\\(x = 5, y = 27\\\\); \\\\(x = 8, y = 52\\\\)</p>" },
        D: { body: "<p>Table with: \\\\(x = 3, y = 21\\\\); \\\\(x = 5, y = 35\\\\); \\\\(x = 8, y = 56\\\\)</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. A solution \\\\((x, y)\\\\) to the given inequality is a value of \\\\(x\\\\) and the corresponding value of \\\\(y\\\\) such that the value of \\\\(y\\\\) is greater than the value of \\\\(7x - 4\\\\). All the tables in the choices have the same three values of \\\\(x\\\\), so each of the three values of \\\\(x\\\\) can be substituted in the given inequality to compare the corresponding values of \\\\(y\\\\) in each of the tables. Substituting \\\\(3\\\\) for \\\\(x\\\\) in the given inequality yields \\\\(y > 7(3) - 4\\\\), or \\\\(y > 17\\\\). Substituting \\\\(5\\\\) for \\\\(x\\\\) in the given inequality yields \\\\(y > 7(5) - 4\\\\), or \\\\(y > 31\\\\). Substituting \\\\(8\\\\) for \\\\(x\\\\) in the given inequality yields \\\\(y > 7(8) - 4\\\\), or \\\\(y > 52\\\\). Therefore, when \\\\(x = 3\\\\), \\\\(x = 5\\\\), and \\\\(x = 8\\\\), the corresponding values of \\\\(y\\\\) must be greater than \\\\(17\\\\), greater than \\\\(31\\\\), and greater than \\\\(52\\\\), respectively. In the table in choice D, when \\\\(x = 3\\\\), the corresponding value of \\\\(y\\\\) is \\\\(21\\\\), which is greater than \\\\(17\\\\); when \\\\(x = 5\\\\), the corresponding value of \\\\(y\\\\) is \\\\(35\\\\), which is greater than \\\\(31\\\\); when \\\\(x = 8\\\\), the corresponding value of \\\\(y\\\\) is \\\\(56\\\\), which is greater than \\\\(52\\\\). Of the given choices, only choice D gives values of \\\\(x\\\\) and their corresponding values of \\\\(y\\\\) that are all solutions to the given inequality.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear inequalities in one or two variables",
      difficulty: "Medium"
    }
  },
  {
    questionId: "07792154",
    externalId: "07792154",
    section: "Math",
    prompt: "<p>For the linear function \\\\(f\\\\), the graph of \\\\(y = f(x)\\\\) in the xy-plane has a slope of \\\\(39\\\\) and passes through the point \\\\((0, 0)\\\\). Which equation defines \\\\(f\\\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\(f(x) = -39x\\\\)</p>" },
        B: { body: "<p>\\\\(f(x) = \\frac{1}{39}x\\\\)</p>" },
        C: { body: "<p>\\\\(f(x) = x - 39\\\\)</p>" },
        D: { body: "<p>\\\\(f(x) = 39x\\\\)</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. An equation defining a linear function can be written in the form \\\\(f(x) = mx + b\\\\), where \\\\(m\\\\) is the slope and \\\\((0, b)\\\\) is the y-intercept of the graph of \\\\(y = f(x)\\\\) in the xy-plane. It's given that the graph of \\\\(y = f(x)\\\\) has a slope of \\\\(39\\\\), so \\\\(m = 39\\\\). It's also given that the graph of \\\\(y = f(x)\\\\) passes through the point \\\\((0, 0)\\\\), so \\\\(b = 0\\\\). Substituting \\\\(39\\\\) for \\\\(m\\\\) and \\\\(0\\\\) for \\\\(b\\\\) in \\\\(f(x) = mx + b\\\\) yields \\\\(f(x) = 39x + 0\\\\), or \\\\(f(x) = 39x\\\\). Thus, the equation that defines \\\\(f\\\\) is \\\\(f(x) = 39x\\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Easy"
    }
  },
  {
    questionId: "06836f64",
    externalId: "06836f64",
    section: "Math",
    prompt: "<p>\\\\[2x - y > 883\\\\]</p><p>For which of the following tables are all the values of \\\\(x\\\\) and their corresponding values of \\\\(y\\\\) solutions to the given inequality?</p>",
    answer: {
      choices: {
        A: { body: "<p>Table with: \\\\(x = 440, y = 0\\\\); \\\\(x = 441, y = -2\\\\); \\\\(x = 442, y = -4\\\\)</p>" },
        B: { body: "<p>Table with: \\\\(x = 440, y = 0\\\\); \\\\(x = 442, y = -2\\\\); \\\\(x = 441, y = -4\\\\)</p>" },
        C: { body: "<p>Table with: \\\\(x = 442, y = 0\\\\); \\\\(x = 440, y = -2\\\\); \\\\(x = 441, y = -4\\\\)</p>" },
        D: { body: "<p>Table with: \\\\(x = 442, y = 0\\\\); \\\\(x = 441, y = -2\\\\); \\\\(x = 440, y = -4\\\\)</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. All the tables in the choices have the same three values of \\\\(x\\\\), \\\\(440\\\\), \\\\(441\\\\), and \\\\(442\\\\), so each of the three values of \\\\(x\\\\) can be substituted in the given inequality to compare the corresponding values of \\\\(y\\\\) in each of the tables. Substituting \\\\(440\\\\) for \\\\(x\\\\) in the given inequality yields \\\\(2(440) - y > 883\\\\), or \\\\(880 - y > 883\\\\). Subtracting \\\\(880\\\\) from both sides of this inequality yields \\\\(-y > 3\\\\). Dividing both sides of this inequality by \\\\(-1\\\\) yields \\\\(y < -3\\\\). Therefore, when \\\\(x = 440\\\\), the corresponding value of \\\\(y\\\\) must be less than \\\\(-3\\\\). Substituting \\\\(441\\\\) for \\\\(x\\\\) in the given inequality yields \\\\(2(441) - y > 883\\\\), or \\\\(882 - y > 883\\\\). Subtracting \\\\(882\\\\) from both sides of this inequality yields \\\\(-y > 1\\\\). Dividing both sides of this inequality by \\\\(-1\\\\) yields \\\\(y < -1\\\\). Therefore, when \\\\(x = 441\\\\), the corresponding value of \\\\(y\\\\) must be less than \\\\(-1\\\\). Substituting \\\\(442\\\\) for \\\\(x\\\\) in the given inequality yields \\\\(2(442) - y > 883\\\\), or \\\\(884 - y > 883\\\\). Subtracting \\\\(884\\\\) from both sides of this inequality yields \\\\(-y > -1\\\\). Dividing both sides of this inequality by \\\\(-1\\\\) yields \\\\(y < 1\\\\). Therefore, when \\\\(x = 442\\\\), the corresponding value of \\\\(y\\\\) must be less than \\\\(1\\\\). For the table in choice D, when \\\\(x = 440\\\\), the corresponding value of \\\\(y\\\\) is \\\\(-4\\\\), which is less than \\\\(-3\\\\); when \\\\(x = 441\\\\), the corresponding value of \\\\(y\\\\) is \\\\(-2\\\\), which is less than \\\\(-1\\\\); when \\\\(x = 442\\\\), the corresponding value of \\\\(y\\\\) is \\\\(0\\\\), which is less than \\\\(1\\\\). Therefore, the table in choice D gives values of \\\\(x\\\\) and their corresponding values of \\\\(y\\\\) that are all solutions to the given inequality.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear inequalities in one or two variables",
      difficulty: "Medium"
    }
  },
  {
    questionId: "630514d2",
    externalId: "630514d2",
    section: "Math",
    prompt: "<p>Gabriella deposits \\\\(\\$35\\\\) in a savings account at the end of each week. At the beginning of the \\\\(1\\text{st}\\\\) week of a year there was \\\\(\\$600\\\\) in that savings account. How much money, in dollars, will be in the account at the end of the \\\\(4\\text{th}\\\\) week of that year?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\(460\\\\)</p>" },
        B: { body: "<p>\\\\(635\\\\)</p>" },
        C: { body: "<p>\\\\(639\\\\)</p>" },
        D: { body: "<p>\\\\(740\\\\)</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. It's given that at the beginning of the \\\\(1\\text{st}\\\\) week of the year there was \\\\(\\$600\\\\) in a savings account and Gabriella deposits \\\\(\\$35\\\\) in that savings account at the end of each week. Therefore, the amount of money, in dollars, in the savings account at the end of the \\\\(4\\text{th}\\\\) week of that year is \\\\(600 + 4(35)\\\\), or \\\\(740\\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Easy"
    }
  },
  {
    questionId: "387e1ecb",
    externalId: "387e1ecb",
    section: "Math",
    prompt: "<p>For the linear function \\\\(h\\\\), the graph of \\\\(y = h(x)\\\\) in the xy-plane passes through the points \\\\((7, 21)\\\\) and \\\\((9, 25)\\\\). Which equation defines \\\\(h\\\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\(h(x) = \\frac{1}{2}x - \\frac{7}{2}\\\\)</p>" },
        B: { body: "<p>\\\\(h(x) = 2x + 7\\\\)</p>" },
        C: { body: "<p>\\\\(h(x) = 7x + 21\\\\)</p>" },
        D: { body: "<p>\\\\(h(x) = 9x + 25\\\\)</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is correct. It's given that the graph of the linear function \\\\(h\\\\), where \\\\(y = h(x)\\\\), passes through the points \\\\((7, 21)\\\\) and \\\\((9, 25)\\\\) in the xy-plane. An equation defining \\\\(h\\\\) can be written in the form \\\\(h(x) = mx + b\\\\), where \\\\(m\\\\), represents the slope of the graph in the xy-plane, and \\\\(b\\\\) represents the y-coordinate of the y-intercept of the graph. The slope can be found using any two points, \\\\((x_1, y_1)\\\\) and \\\\((x_2, y_2)\\\\), and the formula \\\\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\\\). Substituting \\\\((7, 21)\\\\) and \\\\((9, 25)\\\\) for \\\\((x_1, y_1)\\\\) and \\\\((x_2, y_2)\\\\), respectively, in the slope formula yields \\\\(m = \\frac{25 - 21}{9 - 7}\\\\), which is equivalent to \\\\(m = \\frac{4}{2}\\\\), or \\\\(m = 2\\\\). Substituting \\\\(2\\\\) for \\\\(m\\\\) and \\\\((7, 21)\\\\) for \\\\((x, y)\\\\) in the equation \\\\(y = mx + b\\\\) yields \\\\(21 = (2)(7) + b\\\\), or \\\\(21 = 14 + b\\\\). Subtracting \\\\(14\\\\) from each side of this equation yields \\\\(7 = b\\\\). Substituting \\\\(2\\\\) for \\\\(m\\\\) and \\\\(7\\\\) for \\\\(b\\\\) in the equation \\\\(y = mx + b\\\\) yields \\\\(y = 2x + 7\\\\). Since \\\\(y = h(x)\\\\), it follows that the equation that defines \\\\(h\\\\) is \\\\(h(x) = 2x + 7\\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Medium"
    }
  },
  {
    questionId: "d1bdce45",
    externalId: "d1bdce45",
    section: "Math",
    prompt: "<p>\\\\[3x + 5(x + 4) = 76\\\\]</p><p>What value of \\\\(x\\\\) is the solution to the given equation?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\(7\\\\)</p>" },
        B: { body: "<p>\\\\(8\\\\)</p>" },
        C: { body: "<p>\\\\(56\\\\)</p>" },
        D: { body: "<p>\\\\(72\\\\)</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is correct. Applying the distributive property on the left-hand side of the given equation yields \\\\(3x + 5x + 20 = 76\\\\), or \\\\(8x + 20 = 76\\\\). Subtracting \\\\(20\\\\) from each side of this equation yields \\\\(8x = 56\\\\). Dividing each side of this equation by \\\\(8\\\\) yields \\\\(x = 7\\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in one variable",
      difficulty: "Easy"
    }
  },
  {
    questionId: "d5f06835",
    externalId: "d5f06835",
    section: "Math",
    prompt: "<p>\\\\[\\frac{12x + 28}{4} - \\frac{s}{13} = r(x - 8)\\\\]</p><p>In the given equation, \\\\(s\\\\) and \\\\(r\\\\) are constants, and \\\\(s > 0\\\\). If the equation has infinitely many solutions, what is the value of \\\\(s\\\\)?</p>",
    answer: {
      correctAnswer: "403",
      style: "Free Response",
      rationale: "<p>The correct answer is \\\\(403\\\\). For a linear equation in one variable to have infinitely many solutions, the coefficients of the variable must be equal on both sides of the equation and the constant terms must also be equal on both sides of the equation. The given equation can be rewritten as \\\\(\\frac{4(3x + 7)}{4} - \\frac{s}{13} = r(x - 8)\\\\), or \\\\(3x + 7 - \\frac{s}{13} = r(x - 8)\\\\). Applying the distributive property to the right-hand side of this equation yields \\\\(3x + 7 - \\frac{s}{13} = rx - 8r\\\\). For this equation to have infinitely many solutions, the coefficients of \\\\(x\\\\) must be equal, so it follows that \\\\(3 = r\\\\). Additionally, the constant terms must be equal, which means \\\\(7 - \\frac{s}{13} = -8r\\\\). Substituting \\\\(3\\\\) for \\\\(r\\\\) in this equation yields \\\\(7 - \\frac{s}{13} = -8(3)\\\\), or \\\\(7 - \\frac{s}{13} = -24\\\\). Adding \\\\(\\frac{s}{13}\\\\) to both sides of this equation yields \\\\(7 = -24 + \\frac{s}{13}\\\\). Adding \\\\(24\\\\) to both sides of this equation yields \\\\(31 = \\frac{s}{13}\\\\). Multiplying both sides of this equation by \\\\(13\\\\) yields \\\\(403 = s\\\\). Therefore, if the equation has infinitely many solutions, the value of \\\\(s\\\\) is \\\\(403\\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in one variable",
      difficulty: "Hard"
    }
  },
  {
    questionId: "43f4e0a1",
    externalId: "43f4e0a1",
    section: "Math",
    prompt: "<p>\\\\[x + 3y = 29\\\\]\\\\[3y = 11\\\\]</p><p>The solution to the given system of equations is \\\\((x, y)\\\\). What is the value of \\\\(x\\\\)?</p>",
    answer: {
      correctAnswer: "18",
      style: "Free Response",
      rationale: "<p>The correct answer is \\\\(18\\\\). It's given by the second equation in the system that \\\\(3y = 11\\\\). Substituting \\\\(11\\\\) for \\\\(3y\\\\) in the first equation in the system, \\\\(x + 3y = 29\\\\), yields \\\\(x + 11 = 29\\\\). Subtracting \\\\(11\\\\) from both sides of this equation yields \\\\(x = 18\\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Systems of two linear equations in two variables",
      difficulty: "Medium"
    }
  },
  {
    questionId: "e1f59a4d",
    externalId: "e1f59a4d",
    section: "Math",
    prompt: "<p>One gallon of paint will cover \\\\(220\\\\) square feet of a surface. A room has a total wall area of \\\\(w\\\\) square feet. Which equation represents the total amount of paint \\\\(P\\\\), in gallons, needed to paint the walls of the room twice?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\(P = \\frac{w}{110}\\\\)</p>" },
        B: { body: "<p>\\\\(P = 440w\\\\)</p>" },
        C: { body: "<p>\\\\(P = \\frac{w}{220}\\\\)</p>" },
        D: { body: "<p>\\\\(P = 220w\\\\)</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is correct. It's given that \\\\(w\\\\) represents the total wall area, in square feet. Since the walls of the room will be painted twice, the amount of paint, in gallons, needs to cover \\\\(2w\\\\) square feet. It's also given that one gallon of paint will cover \\\\(220\\\\) square feet. Dividing the total area, in square feet, of the surface to be painted by the number of square feet covered by one gallon of paint gives the number of gallons of paint that will be needed. Dividing \\\\(2w\\\\) by \\\\(220\\\\) yields \\\\(\\frac{2w}{220}\\\\), or \\\\(\\frac{w}{110}\\\\). Therefore, the equation that represents the total amount of paint \\\\(P\\\\), in gallons, needed to paint the walls of the room twice is \\\\(P = \\frac{w}{110}\\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Hard"
    }
  },
  {
    questionId: "e497b622",
    externalId: "e497b622",
    section: "Math",
    prompt: "<p>A shipment consists of \\\\(5\\\\)-pound boxes and \\\\(10\\\\)-pound boxes with a total weight of \\\\(220\\\\) pounds. There are \\\\(13\\\\) \\\\(10\\\\)-pound boxes in the shipment. How many \\\\(5\\\\)-pound boxes are in the shipment?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\(5\\\\)</p>" },
        B: { body: "<p>\\\\(10\\\\)</p>" },
        C: { body: "<p>\\\\(13\\\\)</p>" },
        D: { body: "<p>\\\\(18\\\\)</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. It's given that the shipment consists of \\\\(5\\\\)-pound boxes and \\\\(10\\\\)-pound boxes with a total weight of \\\\(220\\\\) pounds. Let \\\\(x\\\\) represent the number of \\\\(5\\\\)-pound boxes and \\\\(y\\\\) represent the number of \\\\(10\\\\)-pound boxes in the shipment. Therefore, the equation \\\\(5x + 10y = 220\\\\) represents this situation. It's given that there are \\\\(13\\\\) \\\\(10\\\\)-pound boxes in the shipment. Substituting \\\\(13\\\\) for \\\\(y\\\\) in the equation \\\\(5x + 10y = 220\\\\) yields \\\\(5x + 10(13) = 220\\\\), or \\\\(5x + 130 = 220\\\\). Subtracting \\\\(130\\\\) from both sides of this equation yields \\\\(5x = 90\\\\). Dividing both sides of this equation by \\\\(5\\\\) yields \\\\(x = 18\\\\). Thus, there are \\\\(18\\\\) \\\\(5\\\\)-pound boxes in the shipment.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Easy"
    }
  },
  {
    questionId: "0dac9e81",
    externalId: "0dac9e81",
    section: "Math",
    prompt: "<p>In the xy-plane, line \\\\(k\\\\) passes through the points \\\\((0, -5)\\\\) and \\\\((1, -1)\\\\). Which equation defines line \\\\(k\\\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\(y = -x + \\frac{1}{4}\\\\)</p>" },
        B: { body: "<p>\\\\(y = \\frac{1}{4}x - 5\\\\)</p>" },
        C: { body: "<p>\\\\(y = -x + 4\\\\)</p>" },
        D: { body: "<p>\\\\(y = 4x - 5\\\\)</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. An equation defining a line in the xy-plane can be written in the form \\\\(y = mx + b\\\\), where \\\\(m\\\\) represents the slope and \\\\((0, b)\\\\) represents the y-intercept of the line. It's given that line \\\\(k\\\\) passes through the point \\\\((0, -5)\\\\); therefore, \\\\(b = -5\\\\). The slope, \\\\(m\\\\), of a line can be found using any two points on the line, \\\\((x_1, y_1)\\\\) and \\\\((x_2, y_2)\\\\), and the slope formula \\\\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\\\). Substituting the points \\\\((0, -5)\\\\) and \\\\((1, -1)\\\\) for \\\\((x_1, y_1)\\\\) and \\\\((x_2, y_2)\\\\), respectively, in the slope formula yields \\\\(m = \\frac{(-1) - (-5)}{(1) - (0)}\\\\), or \\\\(m = 4\\\\). Substituting \\\\(4\\\\) for \\\\(m\\\\) and \\\\(-5\\\\) for \\\\(b\\\\) in the equation \\\\(y = mx + b\\\\) yields \\\\(y = 4x - 5\\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Medium"
    }
  },
  {
    questionId: "e644d732",
    externalId: "e644d732",
    section: "Math",
    prompt: "<p>\\\\[4x - 3y = 5\\\\]\\\\[x = 8\\\\]</p><p>What is the solution \\\\((x, y)\\\\) to the given system of equations?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\((8, 9)\\\\)</p>" },
        B: { body: "<p>\\\\((8, -24)\\\\)</p>" },
        C: { body: "<p>\\\\((8, -9)\\\\)</p>" },
        D: { body: "<p>\\\\((8, 24)\\\\)</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is correct. The second equation in the given system is \\\\(x = 8\\\\). Substituting \\\\(8\\\\) for \\\\(x\\\\) in the first equation in the given system yields \\\\(4(8) - 3y = 5\\\\), or \\\\(32 - 3y = 5\\\\). Subtracting \\\\(32\\\\) from both sides of this equation yields \\\\(-3y = -27\\\\). Dividing both sides of this equation by \\\\(-3\\\\) yields \\\\(y = 9\\\\). Therefore, the solution \\\\((x, y)\\\\) to the given system of equations is \\\\((8, 9)\\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Systems of two linear equations in two variables",
      difficulty: "Easy"
    }
  },
  {
    questionId: "4b0b4e54",
    externalId: "4b0b4e54",
    section: "Math",
    prompt: "<p>\\\\[F(x) = \\frac{9}{5}(x - 273.15) + 32\\\\]</p><p>The function \\\\(F\\\\) gives the temperature, in degrees Fahrenheit, that corresponds to a temperature of \\\\(x\\\\) kelvins. If a temperature increased by \\\\(2.10\\\\) kelvins, by how much did the temperature increase, in degrees Fahrenheit?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\(3.78\\\\)</p>" },
        B: { body: "<p>\\\\(35.78\\\\)</p>" },
        C: { body: "<p>\\\\(487.89\\\\)</p>" },
        D: { body: "<p>\\\\(519.89\\\\)</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is correct. It's given that the function \\\\(F(x) = \\frac{9}{5}(x - 273.15) + 32\\\\) gives the temperature, in degrees Fahrenheit, that corresponds to a temperature of \\\\(x\\\\) kelvins. A temperature that increased by \\\\(2.10\\\\) kelvins means that the value of \\\\(x\\\\) increased by \\\\(2.10\\\\) kelvins. It follows that an increase in \\\\(x\\\\) by \\\\(2.10\\\\) increases \\\\(F(x)\\\\) by \\\\(\\frac{9}{5}(2.10)\\\\), or \\\\(3.78\\\\). Therefore, if a temperature increased by \\\\(2.10\\\\) kelvins, the temperature increased by \\\\(3.78\\\\) degrees Fahrenheit.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Hard"
    }
  },
  {
    questionId: "b2d50dc7",
    externalId: "b2d50dc7",
    section: "Math",
    prompt: "<p>\\\\[y < 6x + 2\\\\]</p><p>For which of the following tables are all the values of \\\\(x\\\\) and their corresponding values of \\\\(y\\\\) solutions to the given inequality?</p>",
    answer: {
      choices: {
        A: { body: "<p>Table with: \\\\(x = 3, y = 20\\\\); \\\\(x = 5, y = 32\\\\); \\\\(x = 7, y = 44\\\\)</p>" },
        B: { body: "<p>Table with: \\\\(x = 3, y = 16\\\\); \\\\(x = 5, y = 36\\\\); \\\\(x = 7, y = 40\\\\)</p>" },
        C: { body: "<p>Table with: \\\\(x = 3, y = 16\\\\); \\\\(x = 5, y = 28\\\\); \\\\(x = 7, y = 40\\\\)</p>" },
        D: { body: "<p>Table with: \\\\(x = 3, y = 24\\\\); \\\\(x = 5, y = 36\\\\); \\\\(x = 7, y = 48\\\\)</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is correct. All the tables in the choices have the same three values of \\\\(x\\\\), so each of the three values of \\\\(x\\\\) can be substituted in the given inequality to compare the corresponding values of \\\\(y\\\\) in each of the tables. Substituting \\\\(3\\\\) for \\\\(x\\\\) in the given inequality yields \\\\(y < 6(3) + 2\\\\), or \\\\(y < 20\\\\). Therefore, when \\\\(x = 3\\\\), the corresponding value of \\\\(y\\\\) is less than \\\\(20\\\\). Substituting \\\\(5\\\\) for \\\\(x\\\\) in the given inequality yields \\\\(y < 6(5) + 2\\\\), or \\\\(y < 32\\\\). Therefore, when \\\\(x = 5\\\\), the corresponding value of \\\\(y\\\\) is less than \\\\(32\\\\). Substituting \\\\(7\\\\) for \\\\(x\\\\) in the given inequality yields \\\\(y < 6(7) + 2\\\\), or \\\\(y < 44\\\\). Therefore, when \\\\(x = 7\\\\), the corresponding value of \\\\(y\\\\) is less than \\\\(44\\\\). For the table in choice C, when \\\\(x = 3\\\\), the corresponding value of \\\\(y\\\\) is \\\\(16\\\\), which is less than \\\\(20\\\\); when \\\\(x = 5\\\\), the corresponding value of \\\\(y\\\\) is \\\\(28\\\\), which is less than \\\\(32\\\\); when \\\\(x = 7\\\\), the corresponding value of \\\\(y\\\\) is \\\\(40\\\\), which is less than \\\\(44\\\\). Therefore, the table in choice C gives values of \\\\(x\\\\) and their corresponding values of \\\\(y\\\\) that are all solutions to the given inequality.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear inequalities in one or two variables",
      difficulty: "Hard"
    }
  }
];

// Write each question to a separate JSON file
let count = 0;
questions.forEach((question) => {
  const filename = `${question.questionId}.json`;
  const filepath = path.join(outputDir, filename);

  fs.writeFileSync(filepath, JSON.stringify(question, null, 2));
  console.log(`Created: ${filename}`);
  count++;
});

console.log(`\nTotal questions processed: ${count}`);
