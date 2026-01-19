const fs = require('fs');
const path = require('path');

// Output directory for questions
const outputDir = '/Users/stephenbaker/Development/sat-practice/public/bank/questions';

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Questions extracted from sullivan math 201-250.pdf
const questions = [
  {
    questionId: "f3d88453",
    externalId: "f3d88453",
    section: "Math",
    prompt: "<p>For the linear function \\\\( f \\\\), the graph of \\\\( y = f(x) \\\\) in the xy-plane has a slope of \\\\( 2 \\\\) and has a y-intercept at \\\\( (0, -5) \\\\). Which equation defines \\\\( f \\\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( f(x) = \\\\frac{1}{2}x - 5 \\\\)</p>" },
        B: { body: "<p>\\\\( f(x) = -\\\\frac{1}{2}x - 5 \\\\)</p>" },
        C: { body: "<p>\\\\( f(x) = -2x - 5 \\\\)</p>" },
        D: { body: "<p>\\\\( f(x) = 2x - 5 \\\\)</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. An equation defining the linear function can be written in the form \\\\( f(x) = mx + b \\\\), where \\\\( m \\\\) is the slope and \\\\( b \\\\) is the y-intercept of the graph of \\\\( y = f(x) \\\\) in the xy-plane. It's given that the graph of \\\\( y = f(x) \\\\) has a slope of \\\\( 2 \\\\). Therefore, \\\\( m = 2 \\\\). It's also given that the graph of \\\\( y = f(x) \\\\) has a y-intercept at \\\\( (0, -5) \\\\). Therefore, \\\\( b = -5 \\\\). Substituting \\\\( 2 \\\\) for \\\\( m \\\\) and \\\\( -5 \\\\) for \\\\( b \\\\) in the equation yields \\\\( f(x) = 2x - 5 \\\\). Thus, the equation that defines \\\\( f \\\\) is \\\\( f(x) = 2x - 5 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Easy"
    }
  },
  {
    questionId: "f0e167d1",
    externalId: "f0e167d1",
    section: "Math",
    prompt: "<p>If \\\\( \\\\frac{x}{8} = 5 \\\\), what is the value of \\\\( \\\\frac{8}{x} \\\\)?</p>",
    answer: {
      choices: null,
      correctChoice: ".2, 1/5",
      style: "Free Response",
      rationale: "<p>The correct answer is \\\\( \\\\frac{1}{5} \\\\). Since the number \\\\( 5 \\\\) can also be written as \\\\( \\\\frac{5}{1} \\\\), the given equation can also be written as \\\\( \\\\frac{x}{8} = \\\\frac{5}{1} \\\\). This equation is equivalent to \\\\( \\\\frac{8}{x} = \\\\frac{1}{5} \\\\). Therefore, the value of \\\\( \\\\frac{8}{x} \\\\) is \\\\( \\\\frac{1}{5} \\\\). Note that 1/5 and .2 are examples of ways to enter a correct answer.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in one variable",
      difficulty: "Easy"
    }
  },
  {
    questionId: "3586b08b",
    externalId: "3586b08b",
    section: "Math",
    prompt: "<p>If \\\\( 5(x + 4) = 4(x + 4) + 29 \\\\), what is the value of \\\\( x + 4 \\\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( -4 \\\\)</p>" },
        B: { body: "<p>\\\\( 25 \\\\)</p>" },
        C: { body: "<p>\\\\( 29 \\\\)</p>" },
        D: { body: "<p>\\\\( 33 \\\\)</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is correct. Subtracting \\\\( 4(x + 4) \\\\) from both sides of the given equation yields \\\\( 1(x + 4) = 29 \\\\), or \\\\( x + 4 = 29 \\\\). Therefore, the value of \\\\( x + 4 \\\\) is \\\\( 29 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in one variable",
      difficulty: "Medium"
    }
  },
  {
    questionId: "a28c5d5e",
    externalId: "a28c5d5e",
    section: "Math",
    prompt: "<p>\\\\( y = 4x - 9 \\\\)<br>\\\\( y = 19 \\\\)<br>What is the solution \\\\( (x, y) \\\\) to the given system of equations?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( (4, 19) \\\\)</p>" },
        B: { body: "<p>\\\\( (7, 19) \\\\)</p>" },
        C: { body: "<p>\\\\( (19, 4) \\\\)</p>" },
        D: { body: "<p>\\\\( (19, 7) \\\\)</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is correct. It's given by the second equation in the system that \\\\( y = 19 \\\\). Substituting \\\\( 19 \\\\) for \\\\( y \\\\) in the first equation yields \\\\( 19 = 4x - 9 \\\\). Adding \\\\( 9 \\\\) to both sides of this equation yields \\\\( 28 = 4x \\\\). Dividing both sides of this equation by \\\\( 4 \\\\) yields \\\\( 7 = x \\\\). Therefore, since \\\\( x = 7 \\\\) and \\\\( y = 19 \\\\), the solution \\\\( (x, y) \\\\) to the given system of equations is \\\\( (7, 19) \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Systems of two linear equations in two variables",
      difficulty: "Easy"
    }
  },
  {
    questionId: "9153c6e2",
    externalId: "9153c6e2",
    section: "Math",
    prompt: "<p>The graph models the relationship between the number of T-shirts, \\\\( x \\\\), and the number of sweatshirts, \\\\( y \\\\), that Kira can purchase for a school fundraiser. Which equation could represent this relationship?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( y = 7x + 18 \\\\)</p>" },
        B: { body: "<p>\\\\( 7x + 18y = 630 \\\\)</p>" },
        C: { body: "<p>\\\\( y = 18x + 7 \\\\)</p>" },
        D: { body: "<p>\\\\( 18x + 7y = 630 \\\\)</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is correct. A line in the xy-plane can be written as \\\\( y = mx + b \\\\), where \\\\( m \\\\) is the slope of the line and \\\\( b \\\\) is the y-coordinate of the y-intercept. The graph shown is a line passing through the points \\\\( (0, 35) \\\\) and \\\\( (90, 0) \\\\). The slope is \\\\( -\\\\frac{7}{18} \\\\) and the y-intercept is \\\\( 35 \\\\). Therefore, the equation \\\\( 7x + 18y = 630 \\\\) represents the relationship between \\\\( x \\\\) and \\\\( y \\\\) modeled by the graph.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Medium"
    }
  },
  {
    questionId: "c700f3b2",
    externalId: "c700f3b2",
    section: "Math",
    prompt: "<p>The perimeter of an isosceles triangle is \\\\( 83 \\\\) inches. Each of the two congruent sides of the triangle has a length of \\\\( 24 \\\\) inches. What is the length, in inches, of the third side?</p>",
    answer: {
      choices: null,
      correctChoice: "35",
      style: "Free Response",
      rationale: "<p>The correct answer is \\\\( 35 \\\\). It's given that the perimeter of an isosceles triangle is \\\\( 83 \\\\) inches and that each of the two congruent sides has a length of \\\\( 24 \\\\) inches. The perimeter of a triangle is the sum of the lengths of its three sides. The equation \\\\( 24 + 24 + x = 83 \\\\) can be used to represent this situation, where \\\\( x \\\\) is the length, in inches, of the third side. Combining like terms on the left-hand side of this equation yields \\\\( 48 + x = 83 \\\\). Subtracting \\\\( 48 \\\\) from both sides of this equation yields \\\\( x = 35 \\\\). Therefore, the length, in inches, of the third side is \\\\( 35 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in one variable",
      difficulty: "Easy"
    }
  },
  {
    questionId: "1605a215",
    externalId: "1605a215",
    section: "Math",
    prompt: "<p>\\\\( x = 8 \\\\)<br>\\\\( x + 3y = 26 \\\\)<br>The solution to the given system of equations is \\\\( (x, y) \\\\). What is the value of \\\\( y \\\\)?</p>",
    answer: {
      choices: null,
      correctChoice: "6",
      style: "Free Response",
      rationale: "<p>The correct answer is \\\\( 6 \\\\). The first equation in the given system is \\\\( x = 8 \\\\). Substituting \\\\( 8 \\\\) for \\\\( x \\\\) in the second equation in the given system yields \\\\( 8 + 3y = 26 \\\\). Subtracting \\\\( 8 \\\\) from both sides of this equation yields \\\\( 3y = 18 \\\\). Dividing both sides of this equation by \\\\( 3 \\\\) yields \\\\( y = 6 \\\\). Therefore, the value of \\\\( y \\\\) is \\\\( 6 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Systems of two linear equations in two variables",
      difficulty: "Easy"
    }
  },
  {
    questionId: "4abc1fa3",
    externalId: "4abc1fa3",
    section: "Math",
    prompt: "<p>For the linear function \\\\( h \\\\), \\\\( b \\\\) is a constant and \\\\( h(0) = 45 \\\\). What is the value of \\\\( b \\\\)?<br>\\\\( h(x) = x + b \\\\)</p>",
    answer: {
      choices: null,
      correctChoice: "45",
      style: "Free Response",
      rationale: "<p>The correct answer is \\\\( 45 \\\\). It's given that \\\\( h(0) = 45 \\\\). Therefore, for the given function \\\\( h \\\\), when \\\\( x = 0 \\\\), \\\\( h(x) = 45 \\\\). Substituting \\\\( 0 \\\\) for \\\\( x \\\\) and \\\\( 45 \\\\) for \\\\( h(x) \\\\) in the given function, \\\\( h(x) = x + b \\\\), yields \\\\( 45 = 0 + b \\\\), or \\\\( 45 = b \\\\). Therefore, the value of \\\\( b \\\\) is \\\\( 45 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Medium"
    }
  },
  {
    questionId: "16fe36f6",
    externalId: "16fe36f6",
    section: "Math",
    prompt: "<p>\\\\( y = \\\\frac{1}{3}x - 14 \\\\)<br>\\\\( y = -x + 18 \\\\)<br>The solution to the given system of equations is \\\\( (x, y) \\\\). What is the value of \\\\( x \\\\)?</p>",
    answer: {
      choices: null,
      correctChoice: "24",
      style: "Free Response",
      rationale: "<p>The correct answer is \\\\( 24 \\\\). The given system of equations can be solved by the substitution method. The first equation in the given system of equations is \\\\( y = \\\\frac{1}{3}x - 14 \\\\). Substituting \\\\( \\\\frac{1}{3}x - 14 \\\\) for \\\\( y \\\\) in the second equation in the given system yields \\\\( \\\\frac{1}{3}x - 14 = -x + 18 \\\\). Adding \\\\( 14 \\\\) to both sides of this equation yields \\\\( \\\\frac{1}{3}x = -x + 32 \\\\). Adding \\\\( x \\\\) to both sides of this equation yields \\\\( \\\\frac{4}{3}x = 32 \\\\). Multiplying both sides of this equation by \\\\( \\\\frac{3}{4} \\\\) yields \\\\( x = 24 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Systems of two linear equations in two variables",
      difficulty: "Medium"
    }
  },
  {
    questionId: "ca4cf555",
    externalId: "ca4cf555",
    section: "Math",
    prompt: "<p>As part of a science project on evaporation, Amaya measured the height of a liquid in a container over a period of time. The function \\\\( f(x) = 33 - 0.18x \\\\) gives the estimated height, in centimeters (cm), of the liquid in the container \\\\( x \\\\) days after the start of the project. Which of the following is the best interpretation of \\\\( 33 \\\\) in this context?</p>",
    answer: {
      choices: {
        A: { body: "<p>The estimated height, in cm, of the liquid at the start of the project</p>" },
        B: { body: "<p>The estimated height, in cm, of the liquid at the end of the project</p>" },
        C: { body: "<p>The estimated change in the height, in cm, of the liquid each day</p>" },
        D: { body: "<p>The estimated number of days for all of the liquid to evaporate</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is correct. It's given that the function \\\\( f(x) = 33 - 0.18x \\\\) gives the estimated height, in centimeters (cm), of the liquid in the container \\\\( x \\\\) days after the start of the project. For a linear function in the form \\\\( f(x) = a + bx \\\\), where \\\\( a \\\\) and \\\\( b \\\\) are constants, \\\\( a \\\\) represents the value of \\\\( f(0) \\\\) and \\\\( b \\\\) represents the rate of change of the function. It follows that in the given function, \\\\( 33 \\\\) represents the value of \\\\( f(0) \\\\). Therefore, the best interpretation of \\\\( 33 \\\\) in this context is the estimated height, in cm, of the liquid at the start of the project.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Easy"
    }
  },
  {
    questionId: "9ecfa82d",
    externalId: "9ecfa82d",
    section: "Math",
    prompt: "<p>The linear function \\\\( g \\\\) is defined by \\\\( g(x) = b - 15x \\\\), where \\\\( b \\\\) is a constant. If \\\\( g(c + 7) = \\\\frac{c}{4} \\\\), where \\\\( c \\\\) is a constant, which of the following expressions represents the value of \\\\( b \\\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( \\\\frac{15c}{4} \\\\)</p>" },
        B: { body: "<p>\\\\( \\\\frac{19c}{4} + 7 \\\\)</p>" },
        C: { body: "<p>\\\\( \\\\frac{61c}{4} + 105 \\\\)</p>" },
        D: { body: "<p>\\\\( 15c + 105 \\\\)</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is correct. It's given that \\\\( g(c + 7) = \\\\frac{c}{4} \\\\). Therefore, for the given linear function \\\\( g \\\\), when \\\\( x = c + 7 \\\\), \\\\( g(x) = \\\\frac{c}{4} \\\\). Substituting \\\\( c + 7 \\\\) for \\\\( x \\\\) and \\\\( \\\\frac{c}{4} \\\\) for \\\\( g(x) \\\\) in \\\\( g(x) = b - 15x \\\\) yields \\\\( \\\\frac{c}{4} = b - 15(c + 7) \\\\). Applying the distributive property to the right-hand side of this equation yields \\\\( \\\\frac{c}{4} = b - 15c - 105 \\\\). Adding \\\\( 15c \\\\) to both sides of this equation yields \\\\( \\\\frac{c}{4} + 15c = b - 105 \\\\). Adding \\\\( 105 \\\\) to both sides of this equation yields \\\\( \\\\frac{c}{4} + 15c + 105 = b \\\\), or \\\\( \\\\frac{61c}{4} + 105 = b \\\\). Therefore, the expression that represents the value of \\\\( b \\\\) is \\\\( \\\\frac{61c}{4} + 105 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Hard"
    }
  },
  {
    questionId: "09da13b3",
    externalId: "09da13b3",
    section: "Math",
    prompt: "<p>\\\\( y < 6x + 2 \\\\)<br>For which of the following tables are all the values of \\\\( x \\\\) and their corresponding values of \\\\( y \\\\) solutions to the given inequality?</p>",
    answer: {
      choices: {
        A: { body: "<p>Table A: x=3, y=20; x=5, y=32; x=7, y=44</p>" },
        B: { body: "<p>Table B: x=3, y=16; x=5, y=36; x=7, y=40</p>" },
        C: { body: "<p>Table C: x=3, y=16; x=5, y=28; x=7, y=40</p>" },
        D: { body: "<p>Table D: x=3, y=24; x=5, y=36; x=7, y=48</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is correct. All the tables in the choices have the same three values of \\\\( x \\\\), so each of the three values of \\\\( x \\\\) can be substituted in the given inequality to compare the corresponding values of \\\\( y \\\\) in each of the tables. Substituting \\\\( 3 \\\\) for \\\\( x \\\\) in the given inequality yields \\\\( y < 6(3) + 2 \\\\), or \\\\( y < 20 \\\\). Therefore, when \\\\( x = 3 \\\\), the corresponding value of \\\\( y \\\\) is less than \\\\( 20 \\\\). Substituting \\\\( 5 \\\\) for \\\\( x \\\\) in the given inequality yields \\\\( y < 6(5) + 2 \\\\), or \\\\( y < 32 \\\\). Therefore, when \\\\( x = 5 \\\\), the corresponding value of \\\\( y \\\\) is less than \\\\( 32 \\\\). Substituting \\\\( 7 \\\\) for \\\\( x \\\\) in the given inequality yields \\\\( y < 6(7) + 2 \\\\), or \\\\( y < 44 \\\\). Therefore, when \\\\( x = 7 \\\\), the corresponding value of \\\\( y \\\\) is less than \\\\( 44 \\\\). For the table in choice C, when \\\\( x = 3 \\\\), the corresponding value of \\\\( y \\\\) is \\\\( 16 \\\\), which is less than \\\\( 20 \\\\); when \\\\( x = 5 \\\\), the corresponding value of \\\\( y \\\\) is \\\\( 28 \\\\), which is less than \\\\( 32 \\\\); when \\\\( x = 7 \\\\), the corresponding value of \\\\( y \\\\) is \\\\( 40 \\\\), which is less than \\\\( 44 \\\\). Therefore, the table in choice C gives values of \\\\( x \\\\) and their corresponding values of \\\\( y \\\\) that are all solutions to the given inequality.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear inequalities in one or two variables",
      difficulty: "Hard"
    }
  },
  {
    questionId: "ab87d548",
    externalId: "ab87d548",
    section: "Math",
    prompt: "<p>The function \\\\( f \\\\) is defined by \\\\( f(x) = 4x + k(x - 1) \\\\), where \\\\( k \\\\) is a constant, and \\\\( f(5) = 32 \\\\). What is the value of \\\\( f(10) \\\\)?</p>",
    answer: {
      choices: null,
      correctChoice: "67",
      style: "Free Response",
      rationale: "<p>The correct answer is \\\\( 67 \\\\). It's given that \\\\( f(5) = 32 \\\\). Therefore, for the given function \\\\( f \\\\), when \\\\( x = 5 \\\\), \\\\( f(x) = 32 \\\\). Substituting \\\\( 5 \\\\) for \\\\( x \\\\) and \\\\( 32 \\\\) for \\\\( f(x) \\\\) in the given function \\\\( f(x) = 4x + k(x - 1) \\\\) yields \\\\( 32 = 4(5) + k(5 - 1) \\\\), or \\\\( 32 = 20 + 4k \\\\). Subtracting \\\\( 20 \\\\) from each side of this equation yields \\\\( 12 = 4k \\\\). Dividing each side of this equation by \\\\( 4 \\\\) yields \\\\( k = 3 \\\\). Substituting \\\\( 3 \\\\) for \\\\( k \\\\) in the given function \\\\( f(x) = 4x + k(x - 1) \\\\) yields \\\\( f(x) = 4x + 3(x - 1) \\\\), which is equivalent to \\\\( f(x) = 4x + 3x - 3 \\\\), or \\\\( f(x) = 7x - 3 \\\\). Substituting \\\\( 10 \\\\) for \\\\( x \\\\) into this equation yields \\\\( f(10) = 7(10) - 3 \\\\), or \\\\( f(10) = 67 \\\\). Therefore, the value of \\\\( f(10) \\\\) is \\\\( 67 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Medium"
    }
  },
  {
    questionId: "109036d5",
    externalId: "109036d5",
    section: "Math",
    prompt: "<p>The function \\\\( f \\\\) is defined by the equation \\\\( f(x) = 7x + 2 \\\\). What is the value of \\\\( f(x) \\\\) when \\\\( x = 4 \\\\)?</p>",
    answer: {
      choices: null,
      correctChoice: "30",
      style: "Free Response",
      rationale: "<p>The correct answer is \\\\( 30 \\\\). The value of \\\\( f(x) \\\\) when \\\\( x = 4 \\\\) can be found by substituting \\\\( 4 \\\\) for \\\\( x \\\\) in the given equation \\\\( f(x) = 7x + 2 \\\\). This yields \\\\( f(4) = 7(4) + 2 \\\\), or \\\\( f(4) = 30 \\\\). Therefore, when \\\\( x = 4 \\\\), the value of \\\\( f(x) \\\\) is \\\\( 30 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Easy"
    }
  },
  {
    questionId: "1ad71c23",
    externalId: "1ad71c23",
    section: "Math",
    prompt: "<p>The table shows two values of \\\\( x \\\\) and their corresponding values of \\\\( y \\\\). In the xy-plane, the graph of the linear equation representing this relationship passes through the point \\\\( \\\\left(\\\\frac{1}{7}, a\\\\right) \\\\). What is the value of \\\\( a \\\\)?<br>Table: x=-18, y=-48; x=7, y=52</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( -\\\\frac{4}{11} \\\\)</p>" },
        B: { body: "<p>\\\\( -\\\\frac{4}{77} \\\\)</p>" },
        C: { body: "<p>\\\\( \\\\frac{4}{7} \\\\)</p>" },
        D: { body: "<p>\\\\( \\\\frac{172}{7} \\\\)</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. The linear relationship between \\\\( x \\\\) and \\\\( y \\\\) can be represented by the equation \\\\( y = mx + b \\\\), where \\\\( m \\\\) is the slope of the graph of this equation in the xy-plane and \\\\( b \\\\) is the y-coordinate of the y-intercept. The slope of a line between any two points \\\\( (x_1, y_1) \\\\) and \\\\( (x_2, y_2) \\\\) on the line can be calculated using the slope formula \\\\( m = \\\\frac{y_2 - y_1}{x_2 - x_1} \\\\). Based on the table, the graph contains the points \\\\( (-18, -48) \\\\) and \\\\( (7, 52) \\\\). Substituting \\\\( (-18, -48) \\\\) and \\\\( (7, 52) \\\\) for \\\\( (x_1, y_1) \\\\) and \\\\( (x_2, y_2) \\\\), respectively, in the slope formula yields \\\\( m = \\\\frac{52 - (-48)}{7 - (-18)} \\\\), which is equivalent to \\\\( m = \\\\frac{100}{25} \\\\), or \\\\( m = 4 \\\\). Substituting \\\\( 4 \\\\) for \\\\( m \\\\), \\\\( -18 \\\\) for \\\\( x \\\\), and \\\\( -48 \\\\) for \\\\( y \\\\) in the equation \\\\( y = mx + b \\\\) yields \\\\( -48 = 4(-18) + b \\\\), or \\\\( -48 = -72 + b \\\\). Adding \\\\( 72 \\\\) to both sides of this equation yields \\\\( 24 = b \\\\). Therefore, \\\\( m = 4 \\\\) and \\\\( b = 24 \\\\). Substituting \\\\( 4 \\\\) for \\\\( m \\\\) and \\\\( 24 \\\\) for \\\\( b \\\\) in the equation \\\\( y = mx + b \\\\) yields \\\\( y = 4x + 24 \\\\). Thus, the equation \\\\( y = 4x + 24 \\\\) represents the linear relationship between \\\\( x \\\\) and \\\\( y \\\\). It's also given that the graph of the linear equation representing this relationship in the xy-plane passes through the point \\\\( \\\\left(\\\\frac{1}{7}, a\\\\right) \\\\). Substituting \\\\( \\\\frac{1}{7} \\\\) for \\\\( x \\\\) and \\\\( a \\\\) for \\\\( y \\\\) in the equation \\\\( y = 4x + 24 \\\\) yields \\\\( a = 4\\\\left(\\\\frac{1}{7}\\\\right) + 24 \\\\), which is equivalent to \\\\( a = \\\\frac{4}{7} + \\\\frac{168}{7} \\\\), or \\\\( a = \\\\frac{172}{7} \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Hard"
    }
  },
  {
    questionId: "5fcc71c6",
    externalId: "5fcc71c6",
    section: "Math",
    prompt: "<p>If \\\\( 3x = 30 \\\\), what is the value of \\\\( 3x - 12 \\\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( -2 \\\\)</p>" },
        B: { body: "<p>\\\\( 18 \\\\)</p>" },
        C: { body: "<p>\\\\( 22 \\\\)</p>" },
        D: { body: "<p>\\\\( 42 \\\\)</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is correct. Subtracting \\\\( 12 \\\\) from each side of the given equation yields \\\\( 3x - 12 = 30 - 12 \\\\), or \\\\( 3x - 12 = 18 \\\\). Therefore, the value of \\\\( 3x - 12 \\\\) is \\\\( 18 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in one variable",
      difficulty: "Easy"
    }
  },
  {
    questionId: "bc6c6829",
    externalId: "bc6c6829",
    section: "Math",
    prompt: "<p>The buildings of a shopping center are designed to allow water to drain from the roof into gutters on the sides of the buildings. The table shows the relationship between the area \\\\( x \\\\), in square feet, of a roof and the amount of water \\\\( f(x) \\\\), in gallons, drained from the roof into the gutters over a certain period of time. Which equation could define \\\\( f \\\\)?<br>Table: Area 2,520, Water 4,536; Area 3,780, Water 6,804; Area 5,040, Water 9,072</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( f(x) = 0.6x \\\\)</p>" },
        B: { body: "<p>\\\\( f(x) = 1.8x \\\\)</p>" },
        C: { body: "<p>\\\\( f(x) = 2,268x \\\\)</p>" },
        D: { body: "<p>\\\\( f(x) = 4,536x \\\\)</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is correct. It's given that the table represents the relationship between the area \\\\( x \\\\), in square feet, of the roof of a shopping center and the amount of water \\\\( f(x) \\\\), in gallons, drained from the roof into the gutters. Every choice represents this relationship with an equation defining \\\\( f \\\\) in the form \\\\( f(x) = mx \\\\), where \\\\( m \\\\) is a constant rate of change. The value of \\\\( m \\\\) can be determined by dividing both sides of the equation by \\\\( x \\\\). Each of three pairs of \\\\( x \\\\) and \\\\( f(x) \\\\) in the table yield \\\\( m = 1.8 \\\\), since \\\\( \\\\frac{4,536}{2,520} = 1.8 \\\\), \\\\( \\\\frac{6,804}{3,780} = 1.8 \\\\), and \\\\( \\\\frac{9,072}{5,040} = 1.8 \\\\). Therefore, the equation \\\\( f(x) = 1.8x \\\\) could define \\\\( f \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Easy"
    }
  },
  {
    questionId: "1c769c42",
    externalId: "1c769c42",
    section: "Math",
    prompt: "<p>At a state fair, attendees can win tokens that are worth a different number of points depending on the shape. One attendee won \\\\( S \\\\) square tokens and \\\\( C \\\\) circle tokens worth a total of \\\\( 1,120 \\\\) points. The equation \\\\( 80S + 90C = 1,120 \\\\) represents this situation. How many more points is a circle token worth than a square token?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( 950 \\\\)</p>" },
        B: { body: "<p>\\\\( 90 \\\\)</p>" },
        C: { body: "<p>\\\\( 80 \\\\)</p>" },
        D: { body: "<p>\\\\( 10 \\\\)</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. It's given that the equation \\\\( 80S + 90C = 1,120 \\\\) represents this situation, where \\\\( S \\\\) is the number of square tokens won, \\\\( C \\\\) is the number of circle tokens won, and \\\\( 1,120 \\\\) is the total number of points the tokens are worth. It follows that \\\\( 80S \\\\) represents the total number of points the square tokens are worth. Therefore, each square token is worth \\\\( 80 \\\\) points. It also follows that \\\\( 90C \\\\) represents the total number of points the circle tokens are worth. Therefore, each circle token is worth \\\\( 90 \\\\) points. Since a circle token is worth \\\\( 90 \\\\) points and a square token is worth \\\\( 80 \\\\) points, then a circle token is worth \\\\( 90 - 80 \\\\), or \\\\( 10 \\\\), more points than a square token.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Medium"
    }
  },
  {
    questionId: "7addd737",
    externalId: "7addd737",
    section: "Math",
    prompt: "<p>\\\\( y = 9x + 12 \\\\)<br>\\\\( x + 7y = 20 \\\\)<br>The solution to the given system of equations is \\\\( (x, y) \\\\). What is the value of \\\\( y \\\\)?</p>",
    answer: {
      choices: null,
      correctChoice: "3",
      style: "Free Response",
      rationale: "<p>The correct answer is \\\\( 3 \\\\). It's given that \\\\( y = 9x + 12 \\\\). Substituting \\\\( 9x + 12 \\\\) for \\\\( y \\\\) in the second equation in the system, \\\\( x + 7y = 20 \\\\), yields \\\\( x + 7(9x + 12) = 20 \\\\), which gives \\\\( x + 63x + 84 = 20 \\\\), or \\\\( 64x + 84 = 20 \\\\). Subtracting \\\\( 84 \\\\) from each side of this equation yields \\\\( 64x = -64 \\\\). Dividing each side of this equation by \\\\( 64 \\\\) yields \\\\( x = -1 \\\\). Substituting \\\\( -1 \\\\) for \\\\( x \\\\) in the first equation in the system, \\\\( y = 9x + 12 \\\\), yields \\\\( y = 9(-1) + 12 \\\\), or \\\\( y = 3 \\\\). Therefore, the value of \\\\( y \\\\) is \\\\( 3 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Systems of two linear equations in two variables",
      difficulty: "Medium"
    }
  },
  {
    questionId: "e96acc98",
    externalId: "e96acc98",
    section: "Math",
    prompt: "<p>\\\\( 5(t + 3) - 7(t + 3) = 38 \\\\)<br>What value of \\\\( t \\\\) is the solution to the given equation?</p>",
    answer: {
      choices: null,
      correctChoice: "-22",
      style: "Free Response",
      rationale: "<p>The correct answer is \\\\( -22 \\\\). The given equation can be rewritten as \\\\( -2(t + 3) = 38 \\\\). Dividing both sides of this equation by \\\\( -2 \\\\) yields \\\\( t + 3 = -19 \\\\). Subtracting \\\\( 3 \\\\) from both sides of this equation yields \\\\( t = -22 \\\\). Therefore, \\\\( -22 \\\\) is the value of \\\\( t \\\\) that is the solution to the given equation.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in one variable",
      difficulty: "Hard"
    }
  },
  {
    questionId: "200192c0",
    externalId: "200192c0",
    section: "Math",
    prompt: "<p>For the linear function \\\\( g \\\\), the graph of \\\\( y = g(x) \\\\) in the xy-plane has a slope of \\\\( 2 \\\\) and passes through the point \\\\( (1, 14) \\\\). Which equation defines \\\\( g \\\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( g(x) = 2x \\\\)</p>" },
        B: { body: "<p>\\\\( g(x) = 2x + 2 \\\\)</p>" },
        C: { body: "<p>\\\\( g(x) = 2x + 12 \\\\)</p>" },
        D: { body: "<p>\\\\( g(x) = 2x + 14 \\\\)</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is correct. An equation defining a linear function can be written in the form \\\\( g(x) = mx + b \\\\), where \\\\( m \\\\) is the slope and \\\\( (0, b) \\\\) is the y-intercept of the graph of \\\\( y = g(x) \\\\) in the xy-plane. It's given that the graph of \\\\( y = g(x) \\\\) has a slope of \\\\( 2 \\\\). Therefore, \\\\( m = 2 \\\\). It's also given that the graph of \\\\( y = g(x) \\\\) passes through the point \\\\( (1, 14) \\\\). It follows that when \\\\( x = 1 \\\\), \\\\( g(x) = 14 \\\\). Substituting \\\\( 2 \\\\) for \\\\( m \\\\), \\\\( 1 \\\\) for \\\\( x \\\\), and \\\\( 14 \\\\) for \\\\( g(x) \\\\) in the equation \\\\( g(x) = mx + b \\\\) yields \\\\( 14 = 2(1) + b \\\\), or \\\\( 14 = 2 + b \\\\). Subtracting \\\\( 2 \\\\) from each side of this equation yields \\\\( 12 = b \\\\). Therefore, \\\\( b = 12 \\\\). Substituting \\\\( 2 \\\\) for \\\\( m \\\\) and \\\\( 12 \\\\) for \\\\( b \\\\) in the equation \\\\( g(x) = mx + b \\\\) yields \\\\( g(x) = 2x + 12 \\\\). Therefore, the equation that defines \\\\( g \\\\) is \\\\( g(x) = 2x + 12 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Medium"
    }
  },
  {
    questionId: "dc1b988f",
    externalId: "dc1b988f",
    section: "Math",
    prompt: "<p>A factory makes \\\\( 9 \\\\)-inch, \\\\( 7 \\\\)-inch, and \\\\( 4 \\\\)-inch concrete screws. During a certain day, the number of \\\\( 9 \\\\)-inch concrete screws that the factory makes is \\\\( 5 \\\\) times the number \\\\( n \\\\) of \\\\( 7 \\\\)-inch concrete screws, and the number of \\\\( 4 \\\\)-inch concrete screws is \\\\( 22 \\\\). During this day, the factory makes \\\\( 100 \\\\) concrete screws total. Which equation represents this situation?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( 9(5n) + 7n + 4(22) = 100 \\\\)</p>" },
        B: { body: "<p>\\\\( 9n + 7n + 4n = 100 \\\\)</p>" },
        C: { body: "<p>\\\\( 5n + 22 = 100 \\\\)</p>" },
        D: { body: "<p>\\\\( 6n + 22 = 100 \\\\)</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. It's given that during a certain day at a factory, the number of \\\\( 7 \\\\)-inch concrete screws the factory makes is \\\\( n \\\\) and the number of \\\\( 4 \\\\)-inch concrete screws the factory makes is \\\\( 22 \\\\). It's also given that during this day the number of \\\\( 9 \\\\)-inch concrete screws the factory makes is \\\\( 5 \\\\) times the number of \\\\( 7 \\\\)-inch concrete screws, or \\\\( 5n \\\\). Therefore, the total number of \\\\( 7 \\\\)-inch, \\\\( 9 \\\\)-inch, and \\\\( 4 \\\\)-inch concrete screws is \\\\( n + 5n + 22 \\\\), or \\\\( 6n + 22 \\\\). It's given that during this day, the factory makes \\\\( 100 \\\\) concrete screws total. Thus, the equation \\\\( 6n + 22 = 100 \\\\) represents this situation.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in one variable",
      difficulty: "Hard"
    }
  },
  {
    questionId: "3b9a53e6",
    externalId: "3b9a53e6",
    section: "Math",
    prompt: "<p>Sean rents a tent at a cost of \\\\( \\$11 \\\\) per day plus a onetime insurance fee of \\\\( \\$10 \\\\). Which equation represents the total cost \\\\( c \\\\), in dollars, to rent the tent with insurance for \\\\( d \\\\) days?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( c = 11(d + 10) \\\\)</p>" },
        B: { body: "<p>\\\\( c = 10(d + 11) \\\\)</p>" },
        C: { body: "<p>\\\\( c = 11d + 10 \\\\)</p>" },
        D: { body: "<p>\\\\( c = 10d + 11 \\\\)</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is correct. It's given that the cost of renting a tent is \\\\( \\$11 \\\\) per day for \\\\( d \\\\) days. Multiplying the rental cost by the number of days yields \\\\( \\$11d \\\\), which represents the cost of renting the tent for \\\\( d \\\\) days before the insurance is added. Adding the onetime insurance fee of \\\\( \\$10 \\\\) to the rental cost of \\\\( \\$11d \\\\) gives the total cost \\\\( c \\\\), in dollars, which can be represented by the equation \\\\( c = 11d + 10 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Easy"
    }
  },
  {
    questionId: "1ba10732",
    externalId: "1ba10732",
    section: "Math",
    prompt: "<p>The total cost \\\\( f(x) \\\\), in dollars, to lease a car for \\\\( 36 \\\\) months from a particular car dealership is given by \\\\( f(x) = 36x + 1,000 \\\\), where \\\\( x \\\\) is the monthly payment, in dollars. What is the total cost to lease a car when the monthly payment is \\\\( \\$400 \\\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( \\$13,400 \\\\)</p>" },
        B: { body: "<p>\\\\( \\$13,000 \\\\)</p>" },
        C: { body: "<p>\\\\( \\$15,400 \\\\)</p>" },
        D: { body: "<p>\\\\( \\$37,400 \\\\)</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is correct. It's given that \\\\( f(x) \\\\) is the total cost, in dollars, to lease a car from this dealership with a monthly payment of \\\\( x \\\\) dollars. Therefore, the total cost, in dollars, to lease the car when the monthly payment is \\\\( \\$400 \\\\) is represented by the value of \\\\( f(x) \\\\) when \\\\( x = 400 \\\\). Substituting \\\\( 400 \\\\) for \\\\( x \\\\) in the equation \\\\( f(x) = 36x + 1,000 \\\\) yields \\\\( f(400) = 36(400) + 1,000 \\\\), or \\\\( f(400) = 15,400 \\\\). Thus, when the monthly payment is \\\\( \\$400 \\\\), the total cost to lease a car is \\\\( \\$15,400 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Easy"
    }
  },
  {
    questionId: "ccb84027",
    externalId: "ccb84027",
    section: "Math",
    prompt: "<p>The graph shows the linear relationship between \\\\( x \\\\) and \\\\( y \\\\). Which table gives three values of \\\\( x \\\\) and their corresponding values of \\\\( y \\\\) for this relationship?</p>",
    answer: {
      choices: {
        A: { body: "<p>Table A: x=0, y=0; x=1, y=-7; x=2, y=-9</p>" },
        B: { body: "<p>Table B: x=0, y=0; x=1, y=-3; x=2, y=-1</p>" },
        C: { body: "<p>Table C: x=0, y=-5; x=1, y=-7; x=2, y=-9</p>" },
        D: { body: "<p>Table D: x=0, y=-5; x=1, y=-3; x=2, y=-1</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. It's given that the graph shows the linear relationship between \\\\( x \\\\) and \\\\( y \\\\). The given graph passes through the points \\\\( (0, -5) \\\\), \\\\( (1, -3) \\\\), and \\\\( (2, -1) \\\\). It follows that when \\\\( x = 0 \\\\), the corresponding value of \\\\( y \\\\) is \\\\( -5 \\\\), when \\\\( x = 1 \\\\), the corresponding value of \\\\( y \\\\) is \\\\( -3 \\\\), and when \\\\( x = 2 \\\\), the corresponding value of \\\\( y \\\\) is \\\\( -1 \\\\). Of the given choices, only the table in choice D gives these three values of \\\\( x \\\\) and their corresponding values of \\\\( y \\\\) for the relationship shown in the graph.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Easy"
    }
  },
  {
    questionId: "56d2643d",
    externalId: "56d2643d",
    section: "Math",
    prompt: "<p>The triangle inequality theorem states that the sum of any two sides of a triangle must be greater than the length of the third side. If a triangle has side lengths of \\\\( 6 \\\\) and \\\\( 12 \\\\), which inequality represents the possible lengths, \\\\( x \\\\), of the third side of the triangle?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( x < 18 \\\\)</p>" },
        B: { body: "<p>\\\\( x > 18 \\\\)</p>" },
        C: { body: "<p>\\\\( 6 < x < 18 \\\\)</p>" },
        D: { body: "<p>\\\\( x < 6 \\\\) or \\\\( x > 18 \\\\)</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is correct. It's given that a triangle has side lengths of \\\\( 6 \\\\) and \\\\( 12 \\\\), and \\\\( x \\\\) represents the length of the third side of the triangle. It's also given that the triangle inequality theorem states that the sum of any two sides of a triangle must be greater than the length of the third side. Therefore, the inequalities \\\\( 6 + x > 12 \\\\), \\\\( 6 + 12 > x \\\\), and \\\\( 12 + x > 6 \\\\) represent all possible values of \\\\( x \\\\). Subtracting \\\\( 6 \\\\) from both sides of the inequality \\\\( 6 + x > 12 \\\\) yields \\\\( x > 12 - 6 \\\\), or \\\\( x > 6 \\\\). Adding \\\\( 6 \\\\) and \\\\( 12 \\\\) in the inequality \\\\( 6 + 12 > x \\\\) yields \\\\( 18 > x \\\\), or \\\\( x < 18 \\\\). Subtracting \\\\( 12 \\\\) from both sides of the inequality \\\\( 12 + x > 6 \\\\) yields \\\\( x > 6 - 12 \\\\), or \\\\( x > -6 \\\\). Since all x-values that satisfy the inequality \\\\( x > 6 \\\\) also satisfy the inequality \\\\( x > -6 \\\\), it follows that the inequalities \\\\( x > 6 \\\\) and \\\\( x < 18 \\\\) represent the possible values of \\\\( x \\\\). Therefore, the inequality \\\\( 6 < x < 18 \\\\) represents the possible lengths, \\\\( x \\\\), of the third side of the triangle.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear inequalities in one or two variables",
      difficulty: "Hard"
    }
  },
  {
    questionId: "58c789fd",
    externalId: "58c789fd",
    section: "Math",
    prompt: "<p>In the xy-plane, line \\\\( s \\\\) passes through the point \\\\( (0, 0) \\\\) and is parallel to the line represented by the equation \\\\( y = 18x + 2 \\\\). If line \\\\( s \\\\) also passes through the point \\\\( (4, d) \\\\), what is the value of \\\\( d \\\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( 2 \\\\)</p>" },
        B: { body: "<p>\\\\( 18 \\\\)</p>" },
        C: { body: "<p>\\\\( 72 \\\\)</p>" },
        D: { body: "<p>\\\\( 74 \\\\)</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is correct. A line in the xy-plane can be represented by an equation of the form \\\\( y = mx + b \\\\), where \\\\( m \\\\) is the slope and \\\\( b \\\\) is the y-coordinate of the y-intercept of the line. It's given that line \\\\( s \\\\) passes through the point \\\\( (0, 0) \\\\). Therefore, the y-coordinate of the y-intercept of line \\\\( s \\\\) is \\\\( 0 \\\\). It's also given that line \\\\( s \\\\) is parallel to the line represented by the equation \\\\( y = 18x + 2 \\\\). Since parallel lines have the same slope, it follows that the slope of line \\\\( s \\\\) is \\\\( 18 \\\\). Therefore, line \\\\( s \\\\) can be represented by the equation \\\\( y = mx + b \\\\), where \\\\( m = 18 \\\\) and \\\\( b = 0 \\\\). Substituting \\\\( 18 \\\\) for \\\\( m \\\\) and \\\\( 0 \\\\) for \\\\( b \\\\) in \\\\( y = mx + b \\\\) yields the equation \\\\( y = 18x + 0 \\\\), or \\\\( y = 18x \\\\). If line \\\\( s \\\\) passes through the point \\\\( (4, d) \\\\), then when \\\\( x = 4 \\\\), \\\\( y = d \\\\) for the equation \\\\( y = 18x \\\\). Substituting \\\\( 4 \\\\) for \\\\( x \\\\) and \\\\( d \\\\) for \\\\( y \\\\) in this equation yields \\\\( d = 18(4) \\\\), or \\\\( d = 72 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Medium"
    }
  },
  {
    questionId: "edf8a6ae",
    externalId: "edf8a6ae",
    section: "Math",
    prompt: "<p>\\\\( 5x = 15 \\\\)<br>\\\\( -4x + y = -2 \\\\)<br>The solution to the given system of equations is \\\\( (x, y) \\\\). What is the value of \\\\( x + y \\\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( -17 \\\\)</p>" },
        B: { body: "<p>\\\\( -13 \\\\)</p>" },
        C: { body: "<p>\\\\( 13 \\\\)</p>" },
        D: { body: "<p>\\\\( 17 \\\\)</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is correct. Adding the second equation of the given system to the first equation yields \\\\( 5x + (-4x + y) = 15 + (-2) \\\\), which is equivalent to \\\\( x + y = 13 \\\\). So the value of \\\\( x + y \\\\) is \\\\( 13 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Systems of two linear equations in two variables",
      difficulty: "Easy"
    }
  },
  {
    questionId: "efec0cc4",
    externalId: "efec0cc4",
    section: "Math",
    prompt: "<p>The function \\\\( f \\\\) is defined by \\\\( f(x) = \\\\frac{1}{10}x - 2 \\\\). What is the y-intercept of the graph of \\\\( y = f(x) \\\\) in the xy-plane?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( (-2, 0) \\\\)</p>" },
        B: { body: "<p>\\\\( (0, -2) \\\\)</p>" },
        C: { body: "<p>\\\\( \\\\left(0, \\\\frac{1}{10}\\\\right) \\\\)</p>" },
        D: { body: "<p>\\\\( \\\\left(\\\\frac{1}{10}, 0\\\\right) \\\\)</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is correct. The y-intercept of the graph of a function in the xy-plane is the point on the graph where \\\\( x = 0 \\\\). It's given that \\\\( f(x) = \\\\frac{1}{10}x - 2 \\\\). Substituting \\\\( 0 \\\\) for \\\\( x \\\\) in this equation yields \\\\( f(0) = \\\\frac{1}{10}(0) - 2 \\\\), or \\\\( f(0) = -2 \\\\). Since it's given that \\\\( y = f(x) \\\\), it follows that \\\\( y = -2 \\\\) when \\\\( x = 0 \\\\). Therefore, the y-intercept of the graph of \\\\( y = f(x) \\\\) in the xy-plane is \\\\( (0, -2) \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Easy"
    }
  },
  {
    questionId: "77b21e2b",
    externalId: "77b21e2b",
    section: "Math",
    prompt: "<p>Line \\\\( r \\\\) in the xy-plane has a slope of \\\\( 4 \\\\) and passes through the point \\\\( (0, 6) \\\\). Which equation defines line \\\\( r \\\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( y = -6x + 4 \\\\)</p>" },
        B: { body: "<p>\\\\( y = 6x + 4 \\\\)</p>" },
        C: { body: "<p>\\\\( y = 4x - 6 \\\\)</p>" },
        D: { body: "<p>\\\\( y = 4x + 6 \\\\)</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. A line in the xy-plane with a slope of \\\\( m \\\\) and a y-intercept of \\\\( b \\\\) can be defined by an equation in the form \\\\( y = mx + b \\\\). It's given that line \\\\( r \\\\) has a slope of \\\\( 4 \\\\) and passes through the point \\\\( (0, 6) \\\\). It follows that \\\\( m = 4 \\\\) and \\\\( b = 6 \\\\). Substituting \\\\( 4 \\\\) for \\\\( m \\\\) and \\\\( 6 \\\\) for \\\\( b \\\\) in the equation \\\\( y = mx + b \\\\) yields \\\\( y = 4x + 6 \\\\). Therefore, the equation \\\\( y = 4x + 6 \\\\) defines line \\\\( r \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Easy"
    }
  },
  {
    questionId: "5cf2a640",
    externalId: "5cf2a640",
    section: "Math",
    prompt: "<p>\\\\( 7x + 6y = 5 \\\\)<br>\\\\( 28x + 24y = 20 \\\\)<br>For each real number \\\\( r \\\\), which of the following points lies on the graph of each equation in the xy-plane for the given system?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( \\\\left(r, -\\\\frac{6r}{7} + \\\\frac{5}{7}\\\\right) \\\\)</p>" },
        B: { body: "<p>\\\\( \\\\left(r, \\\\frac{7r}{6} + \\\\frac{5}{6}\\\\right) \\\\)</p>" },
        C: { body: "<p>\\\\( \\\\left(\\\\frac{r}{4} + 5, -\\\\frac{r}{4} + 20\\\\right) \\\\)</p>" },
        D: { body: "<p>\\\\( \\\\left(-\\\\frac{6r}{7} + \\\\frac{5}{7}, r\\\\right) \\\\)</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. Dividing each side of the second equation in the given system by \\\\( 4 \\\\) yields \\\\( 7x + 6y = 5 \\\\). It follows that the two equations in the given system are equivalent and any point that lies on the graph of one equation will also lie on the graph of the other equation. Substituting \\\\( r \\\\) for \\\\( y \\\\) in the equation \\\\( 7x + 6y = 5 \\\\) yields \\\\( 7x + 6r = 5 \\\\). Subtracting \\\\( 6r \\\\) from each side of this equation yields \\\\( 7x = 5 - 6r \\\\). Dividing each side of this equation by \\\\( 7 \\\\) yields \\\\( x = -\\\\frac{6r}{7} + \\\\frac{5}{7} \\\\). Therefore, the point \\\\( \\\\left(-\\\\frac{6r}{7} + \\\\frac{5}{7}, r\\\\right) \\\\) lies on the graph of each equation in the xy-plane for each real number \\\\( r \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Systems of two linear equations in two variables",
      difficulty: "Hard"
    }
  },
  {
    questionId: "da95cd89",
    externalId: "da95cd89",
    section: "Math",
    prompt: "<p>For a snowstorm in a certain town, the minimum rate of snowfall recorded was \\\\( 0.6 \\\\) inches per hour, and the maximum rate of snowfall recorded was \\\\( 1.8 \\\\) inches per hour. Which inequality is true for all values of \\\\( s \\\\), where \\\\( s \\\\) represents a rate of snowfall, in inches per hour, recorded for this snowstorm?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( s \\\\geq 2.4 \\\\)</p>" },
        B: { body: "<p>\\\\( s \\\\geq 1.8 \\\\)</p>" },
        C: { body: "<p>\\\\( 0 \\\\leq s \\\\leq 0.6 \\\\)</p>" },
        D: { body: "<p>\\\\( 0.6 \\\\leq s \\\\leq 1.8 \\\\)</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. It's given that for a snowstorm in a certain town, the minimum rate of snowfall recorded was \\\\( 0.6 \\\\) inches per hour, the maximum rate of snowfall recorded was \\\\( 1.8 \\\\) inches per hour, and \\\\( s \\\\) represents a rate of snowfall, in inches per hour, recorded for this snowstorm. It follows that the inequality \\\\( 0.6 \\\\leq s \\\\leq 1.8 \\\\) is true for all values of \\\\( s \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear inequalities in one or two variables",
      difficulty: "Medium"
    }
  },
  {
    questionId: "e4e977a4",
    externalId: "e4e977a4",
    section: "Math",
    prompt: "<p>The table shows four values of \\\\( x \\\\) and their corresponding values of \\\\( y \\\\). There is a linear relationship between \\\\( x \\\\) and \\\\( y \\\\). Which of the following equations represents this relationship?<br>Table: x=-6, y=65; x=-3, y=56; x=3, y=38; x=6, y=29</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( 9x + 3y = 141 \\\\)</p>" },
        B: { body: "<p>\\\\( 9x + 3y = 3 \\\\)</p>" },
        C: { body: "<p>\\\\( 3x + 9y = 141 \\\\)</p>" },
        D: { body: "<p>\\\\( 3x + 9y = 3 \\\\)</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is correct. An equation representing the linear relationship between \\\\( x \\\\) and \\\\( y \\\\) can be written in slope-intercept form \\\\( y = mx + b \\\\), where \\\\( m \\\\) is the slope of the graph of the equation in the xy-plane and \\\\( b \\\\) is the y-intercept. The slope, \\\\( m \\\\), can be calculated using two ordered pairs, \\\\( (x_1, y_1) \\\\) and \\\\( (x_2, y_2) \\\\), and the formula \\\\( m = \\\\frac{y_2 - y_1}{x_2 - x_1} \\\\). Substituting the ordered pairs \\\\( (-6, 65) \\\\) and \\\\( (6, 29) \\\\) from the table for \\\\( (x_1, y_1) \\\\) and \\\\( (x_2, y_2) \\\\), respectively, in this formula yields \\\\( m = \\\\frac{29 - 65}{6 - (-6)} \\\\), which is equivalent to \\\\( m = \\\\frac{-36}{12} \\\\), or \\\\( m = -3 \\\\). Substituting \\\\( -3 \\\\) for \\\\( m \\\\) in the formula \\\\( y = mx + b \\\\) yields \\\\( y = -3x + b \\\\). Substituting the point \\\\( (-6, 65) \\\\) into this equation yields \\\\( 65 = -3(-6) + b \\\\), or \\\\( 65 = 18 + b \\\\). Subtracting \\\\( 18 \\\\) from both sides of this equation yields \\\\( 47 = b \\\\). Substituting \\\\( 47 \\\\) for \\\\( b \\\\) in the equation \\\\( y = -3x + b \\\\) yields \\\\( y = -3x + 47 \\\\). Adding \\\\( 3x \\\\) to both sides of this equation yields \\\\( 3x + y = 47 \\\\). Multiplying both sides of this equation by \\\\( 3 \\\\) yields \\\\( 9x + 3y = 141 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Medium"
    }
  },
  {
    questionId: "432f9706",
    externalId: "432f9706",
    section: "Math",
    prompt: "<p>A certain township consists of a \\\\( 5 \\\\)-hectare industrial park and a \\\\( 24 \\\\)-hectare neighborhood. The total number of trees in the township is \\\\( 4,529 \\\\). The equation \\\\( 5x + 24y = 4,529 \\\\) represents this situation. Which of the following is the best interpretation of \\\\( x \\\\) in this context?</p>",
    answer: {
      choices: {
        A: { body: "<p>The average number of trees per hectare in the industrial park</p>" },
        B: { body: "<p>The average number of trees per hectare in the neighborhood</p>" },
        C: { body: "<p>The total number of trees in the industrial park</p>" },
        D: { body: "<p>The total number of trees in the neighborhood</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is correct. It's given that a certain township consists of a \\\\( 5 \\\\)-hectare industrial park and a \\\\( 24 \\\\)-hectare neighborhood and that the total number of trees in the township is \\\\( 4,529 \\\\). It's also given that the equation \\\\( 5x + 24y = 4,529 \\\\) represents this situation. Since the total number of trees for a given area can be determined by taking the size of the area, in hectares, times the average number of trees per hectare, the best interpretation of \\\\( 5x \\\\) is the number of trees in the industrial park and the best interpretation of \\\\( 24y \\\\) is the number of trees in the neighborhood. Since \\\\( 5 \\\\) is the size of the industrial park, in hectares, the best interpretation of \\\\( x \\\\) is the average number of trees per hectare in the industrial park.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Medium"
    }
  },
  {
    questionId: "a4a5e4ad",
    externalId: "a4a5e4ad",
    section: "Math",
    prompt: "<p>Last week, an interior designer earned a total of \\\\( \\$1,258 \\\\) from consulting for \\\\( x \\\\) hours and drawing up plans for \\\\( y \\\\) hours. The equation \\\\( 68x + 85y = 1,258 \\\\) represents this situation. Which of the following is the best interpretation of \\\\( 68 \\\\) in this context?</p>",
    answer: {
      choices: {
        A: { body: "<p>The interior designer earned \\\\( \\$68 \\\\) per hour consulting last week.</p>" },
        B: { body: "<p>The interior designer worked \\\\( 68 \\\\) hours drawing up plans last week.</p>" },
        C: { body: "<p>The interior designer earned \\\\( \\$68 \\\\) per hour drawing up plans last week.</p>" },
        D: { body: "<p>The interior designer worked \\\\( 68 \\\\) hours consulting last week.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is correct. It's given that \\\\( 68x + 85y = 1,258 \\\\) represents the situation where an interior designer earned a total of \\\\( \\$1,258 \\\\) last week from consulting for \\\\( x \\\\) hours and drawing up plans for \\\\( y \\\\) hours. Thus, \\\\( 68x \\\\) represents the amount earned, in dollars, from consulting for \\\\( x \\\\) hours, and \\\\( 85y \\\\) represents the amount earned, in dollars, from drawing up plans for \\\\( y \\\\) hours. Since \\\\( 68x \\\\) represents the amount earned, in dollars, from consulting for \\\\( x \\\\) hours, it follows that the interior designer earned \\\\( \\$68 \\\\) per hour consulting last week.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Easy"
    }
  },
  {
    questionId: "ea278c09",
    externalId: "ea278c09",
    section: "Math",
    prompt: "<p>The graph of a system of linear equations is shown. What is the solution \\\\( (x, y) \\\\) to the system?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( (0, 3) \\\\)</p>" },
        B: { body: "<p>\\\\( (1, 3) \\\\)</p>" },
        C: { body: "<p>\\\\( (2, 3) \\\\)</p>" },
        D: { body: "<p>\\\\( (3, 3) \\\\)</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is correct. The solution to this system of linear equations is represented by the point that lies on both lines shown, or the point of intersection of the two lines. According to the graph, the point of intersection occurs when \\\\( x = 2 \\\\) and \\\\( y = 3 \\\\), or at the point \\\\( (2, 3) \\\\). Therefore, the solution \\\\( (x, y) \\\\) to the system is \\\\( (2, 3) \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Systems of two linear equations in two variables",
      difficulty: "Easy"
    }
  },
  {
    questionId: "84877fd5",
    externalId: "84877fd5",
    section: "Math",
    prompt: "<p>For groups of \\\\( 25 \\\\) or more people, a museum charges \\\\( \\$21 \\\\) per person for the first \\\\( 25 \\\\) people and \\\\( \\$14 \\\\) for each additional person. Which function \\\\( f \\\\) gives the total charge, in dollars, for a tour group with \\\\( n \\\\) people, where \\\\( n \\\\geq 25 \\\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( f(n) = 14n + 175 \\\\)</p>" },
        B: { body: "<p>\\\\( f(n) = 14n + 525 \\\\)</p>" },
        C: { body: "<p>\\\\( f(n) = 35n - 350 \\\\)</p>" },
        D: { body: "<p>\\\\( f(n) = 14n + 21 \\\\)</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is correct. A tour group with \\\\( n \\\\) people, where \\\\( n \\\\geq 25 \\\\), can be split into two subgroups: the first \\\\( 25 \\\\) people and the additional \\\\( n - 25 \\\\) people. Since the museum charges \\\\( \\$21 \\\\) per person for the first \\\\( 25 \\\\) people and \\\\( \\$14 \\\\) for each additional person, the charge for the first \\\\( 25 \\\\) people is \\\\( \\$21(25) \\\\) and the charge for the additional \\\\( n - 25 \\\\) people is \\\\( \\$14(n - 25) \\\\). Therefore, the total charge, in dollars, is given by the function \\\\( f(n) = 21(25) + 14(n - 25) \\\\), or \\\\( f(n) = 14n + 175 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Hard"
    }
  },
  {
    questionId: "0ed7f9ed",
    externalId: "0ed7f9ed",
    section: "Math",
    prompt: "<p>If \\\\( 4x = 3 \\\\), what is the value of \\\\( 24x \\\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( \\\\frac{9}{2} \\\\)</p>" },
        B: { body: "<p>\\\\( 6 \\\\)</p>" },
        C: { body: "<p>\\\\( 18 \\\\)</p>" },
        D: { body: "<p>\\\\( 72 \\\\)</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is correct. It's given that \\\\( 4x = 3 \\\\). Multiplying each side of this equation by \\\\( 6 \\\\) yields \\\\( 24x = 18 \\\\). Therefore, the value of \\\\( 24x \\\\) is \\\\( 18 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in one variable",
      difficulty: "Easy"
    }
  },
  {
    questionId: "670da52f",
    externalId: "670da52f",
    section: "Math",
    prompt: "<p>\\\\( y = 6x + 3 \\\\)<br>One of the two equations in a system of linear equations is given. The system has infinitely many solutions. Which equation could be the second equation in this system?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( y = 2(6x) + 3 \\\\)</p>" },
        B: { body: "<p>\\\\( y = 2(6x + 3) \\\\)</p>" },
        C: { body: "<p>\\\\( 2(y) = 2(6x) + 3 \\\\)</p>" },
        D: { body: "<p>\\\\( 2(y) = 2(6x + 3) \\\\)</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. It's given that the system has infinitely many solutions. A system of two linear equations has infinitely many solutions when the two linear equations are equivalent. When one equation is a multiple of another equation, the two equations are equivalent. Multiplying each side of the given equation by \\\\( 2 \\\\) yields \\\\( 2(y) = 2(6x + 3) \\\\). Thus, \\\\( 2(y) = 2(6x + 3) \\\\) is equivalent to the given equation and could be the second equation in the system.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Systems of two linear equations in two variables",
      difficulty: "Medium"
    }
  },
  {
    questionId: "4eb9696e",
    externalId: "4eb9696e",
    section: "Math",
    prompt: "<p>If \\\\( 2x + 3 = 9 \\\\), what is the value of \\\\( 6x - 1 \\\\)?</p>",
    answer: {
      choices: null,
      correctChoice: "17",
      style: "Free Response",
      rationale: "<p>The correct answer is \\\\( 17 \\\\). It's given that \\\\( 2x + 3 = 9 \\\\). Multiplying each side of this equation by \\\\( 3 \\\\) yields \\\\( 3(2x + 3) = 3(9) \\\\), or \\\\( 6x + 9 = 27 \\\\). Subtracting \\\\( 10 \\\\) from each side of this equation yields \\\\( 6x + 9 - 10 = 27 - 10 \\\\), or \\\\( 6x - 1 = 17 \\\\). Therefore, the value of \\\\( 6x - 1 \\\\) is \\\\( 17 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in one variable",
      difficulty: "Easy"
    }
  },
  {
    questionId: "ea07c5fa",
    externalId: "ea07c5fa",
    section: "Math",
    prompt: "<p>Connor has \\\\( c \\\\) dollars and Maria has \\\\( m \\\\) dollars. Connor has \\\\( 4 \\\\) times as many dollars as Maria, and together they have a total of \\\\( \\$25.00 \\\\). Which system of equations represents this situation?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( c = 4m \\\\)<br>\\\\( c + m = 25 \\\\)</p>" },
        B: { body: "<p>\\\\( m = 4c \\\\)<br>\\\\( c + m = 25 \\\\)</p>" },
        C: { body: "<p>\\\\( c = 25m \\\\)<br>\\\\( c + m = 4 \\\\)</p>" },
        D: { body: "<p>\\\\( m = 25c \\\\)<br>\\\\( c + m = 4 \\\\)</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is correct. It's given that Connor has \\\\( c \\\\) dollars, Maria has \\\\( m \\\\) dollars, and Connor has \\\\( 4 \\\\) times as many dollars as Maria. This can be represented by the equation \\\\( c = 4m \\\\). It's also given that together, Connor and Maria have a total of \\\\( \\$25.00 \\\\), which can be represented by the equation \\\\( c + m = 25 \\\\). Therefore, the system consisting of the equations \\\\( c = 4m \\\\) and \\\\( c + m = 25 \\\\) represents this situation.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Systems of two linear equations in two variables",
      difficulty: "Easy"
    }
  },
  {
    questionId: "c8de424b",
    externalId: "c8de424b",
    section: "Math",
    prompt: "<p>A model predicts that a certain animal weighed \\\\( 241 \\\\) pounds when it was born and that the animal gained \\\\( 3 \\\\) pounds per day in its first year of life. This model is defined by an equation in the form \\\\( f(x) = a + bx \\\\), where \\\\( f(x) \\\\) is the predicted weight, in pounds, of the animal \\\\( x \\\\) days after it was born, and \\\\( a \\\\) and \\\\( b \\\\) are constants. What is the value of \\\\( a \\\\)?</p>",
    answer: {
      choices: null,
      correctChoice: "241",
      style: "Free Response",
      rationale: "<p>The correct answer is \\\\( 241 \\\\). For a certain animal, it's given that a model predicts the animal weighed \\\\( 241 \\\\) pounds when it was born and gained \\\\( 3 \\\\) pounds per day in its first year of life. It's also given that this model is defined by an equation in the form \\\\( f(x) = a + bx \\\\), where \\\\( f(x) \\\\) is the predicted weight, in pounds, of the animal \\\\( x \\\\) days after it was born, and \\\\( a \\\\) and \\\\( b \\\\) are constants. It follows that \\\\( a \\\\) represents the predicted weight, in pounds, of the animal when it was born and \\\\( b \\\\) represents the predicted rate of weight gain, in pounds per day, in its first year of life. Thus, the value of \\\\( a \\\\) is \\\\( 241 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Medium"
    }
  },
  {
    questionId: "542971a2",
    externalId: "542971a2",
    section: "Math",
    prompt: "<p>The equation \\\\( 7g + 7b = 840 \\\\) represents the number of blue tiles, \\\\( b \\\\), and the number of green tiles, \\\\( g \\\\), an artist needs for an \\\\( 840 \\\\)-square-inch tile project. The artist needs \\\\( 71 \\\\) blue tiles for the project. How many green tiles does he need?</p>",
    answer: {
      choices: null,
      correctChoice: "49",
      style: "Free Response",
      rationale: "<p>The correct answer is \\\\( 49 \\\\). It's given that the equation \\\\( 7g + 7b = 840 \\\\) represents the number of blue tiles, \\\\( b \\\\), and the number of green tiles, \\\\( g \\\\), an artist needs for an \\\\( 840 \\\\)-square-inch tile project. It's also given that the artist needs \\\\( 71 \\\\) blue tiles for the project. Substituting \\\\( 71 \\\\) for \\\\( b \\\\) in the equation \\\\( 7g + 7b = 840 \\\\) yields \\\\( 7g + 7(71) = 840 \\\\), or \\\\( 7g + 497 = 840 \\\\). Subtracting \\\\( 497 \\\\) from both sides of this equation yields \\\\( 7g = 343 \\\\). Dividing both sides of this equation by \\\\( 7 \\\\) yields \\\\( g = 49 \\\\). Therefore, the artist needs \\\\( 49 \\\\) green tiles for the project.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Medium"
    }
  },
  {
    questionId: "e9e0893d",
    externalId: "e9e0893d",
    section: "Math",
    prompt: "<p>The length, \\\\( y \\\\), of a white whale was \\\\( 162 \\\\) centimeters (cm) when it was born and increased an average of \\\\( 4.8 \\\\) cm per month for the first \\\\( 12 \\\\) months after it was born. Which equation best represents this situation, where \\\\( x \\\\) is the number of months after the whale was born and \\\\( y \\\\) is the length, in cm, of the whale?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( y = 162x \\\\)</p>" },
        B: { body: "<p>\\\\( y = 162x + 162 \\\\)</p>" },
        C: { body: "<p>\\\\( y = 4.8x + 4.8 \\\\)</p>" },
        D: { body: "<p>\\\\( y = 4.8x + 162 \\\\)</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. It's given that the length of the whale was \\\\( 162 \\\\) cm when it was born and that its length increased an average of \\\\( 4.8 \\\\) cm per month for the first \\\\( 12 \\\\) months after it was born. Since \\\\( x \\\\) represents the number of months after the whale was born, the total increase in the whale's length, in cm, is \\\\( 4.8 \\\\) times \\\\( x \\\\), or \\\\( 4.8x \\\\). The length of the whale \\\\( y \\\\), in cm, can be found by adding the whale's length at birth, \\\\( 162 \\\\), to the total increase in length, \\\\( 4.8x \\\\). Therefore, the equation that best represents this situation is \\\\( y = 4.8x + 162 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Easy"
    }
  },
  {
    questionId: "da1ebb54",
    externalId: "da1ebb54",
    section: "Math",
    prompt: "<p>The function \\\\( f \\\\) is defined by \\\\( f(x) = \\\\frac{x + 15}{5} \\\\), and \\\\( f(a) = 10 \\\\), where \\\\( a \\\\) is a constant. What is the value of \\\\( a \\\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( 5 \\\\)</p>" },
        B: { body: "<p>\\\\( 10 \\\\)</p>" },
        C: { body: "<p>\\\\( 35 \\\\)</p>" },
        D: { body: "<p>\\\\( 65 \\\\)</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is correct. It's given that \\\\( f(x) = \\\\frac{x + 15}{5} \\\\) and \\\\( f(a) = 10 \\\\), where \\\\( a \\\\) is a constant. Therefore, for the given function \\\\( f \\\\), when \\\\( x = a \\\\), \\\\( f(x) = 10 \\\\). Substituting \\\\( a \\\\) for \\\\( x \\\\) and \\\\( 10 \\\\) for \\\\( f(x) \\\\) in the given function yields \\\\( 10 = \\\\frac{a + 15}{5} \\\\). Multiplying both sides of this equation by \\\\( 5 \\\\) yields \\\\( 50 = a + 15 \\\\). Subtracting \\\\( 15 \\\\) from both sides of this equation yields \\\\( 35 = a \\\\). Therefore, the value of \\\\( a \\\\) is \\\\( 35 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Medium"
    }
  },
  {
    questionId: "56b227af",
    externalId: "56b227af",
    section: "Math",
    prompt: "<p>\\\\( y = x + 4 \\\\)<br>Which table gives three values of \\\\( x \\\\) and their corresponding values of \\\\( y \\\\) for the given equation?</p>",
    answer: {
      choices: {
        A: { body: "<p>Table A: x=0, y=4; x=1, y=5; x=2, y=6</p>" },
        B: { body: "<p>Table B: x=0, y=6; x=1, y=5; x=2, y=4</p>" },
        C: { body: "<p>Table C: x=0, y=2; x=1, y=1; x=2, y=0</p>" },
        D: { body: "<p>Table D: x=0, y=0; x=1, y=1; x=2, y=2</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is correct. Substituting \\\\( 0 \\\\) for \\\\( x \\\\) into the given equation yields \\\\( y = 0 + 4 \\\\), or \\\\( y = 4 \\\\). Therefore, when \\\\( x = 0 \\\\), the corresponding value of \\\\( y \\\\) for the given equation is \\\\( 4 \\\\). Substituting \\\\( 1 \\\\) for \\\\( x \\\\) into the given equation yields \\\\( y = 1 + 4 \\\\), or \\\\( y = 5 \\\\). Therefore, when \\\\( x = 1 \\\\), the corresponding value of \\\\( y \\\\) for the given equation is \\\\( 5 \\\\). Substituting \\\\( 2 \\\\) for \\\\( x \\\\) into the given equation yields \\\\( y = 2 + 4 \\\\), or \\\\( y = 6 \\\\). Therefore, when \\\\( x = 2 \\\\), the corresponding value of \\\\( y \\\\) for the given equation is \\\\( 6 \\\\). Of the choices given, only the table in choice A gives these three values of \\\\( x \\\\) and their corresponding values of \\\\( y \\\\) for the given equation.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Easy"
    }
  },
  {
    questionId: "04857055",
    externalId: "04857055",
    section: "Math",
    prompt: "<p>A linear model estimates the population of a city from \\\\( 1991 \\\\) to \\\\( 2015 \\\\). The model estimates the population was \\\\( 57 \\\\) thousand in \\\\( 1991 \\\\), \\\\( 224 \\\\) thousand in \\\\( 2011 \\\\), and \\\\( x \\\\) thousand in \\\\( 2015 \\\\). To the nearest whole number, what is the value of \\\\( x \\\\)?</p>",
    answer: {
      choices: null,
      correctChoice: "257",
      style: "Free Response",
      rationale: "<p>The correct answer is \\\\( 257 \\\\). It's given that a linear model estimates the population of a city from \\\\( 1991 \\\\) to \\\\( 2015 \\\\). Since the population can be estimated using a linear model, it follows that there is a constant rate of change for the model. It's also given that the model estimates the population was \\\\( 57 \\\\) thousand in \\\\( 1991 \\\\), \\\\( 224 \\\\) thousand in \\\\( 2011 \\\\), and \\\\( x \\\\) thousand in \\\\( 2015 \\\\). The change in the population between \\\\( 1991 \\\\) and \\\\( 2011 \\\\) is \\\\( 224 - 57 \\\\), or \\\\( 167 \\\\), thousand. The change in the number of years between \\\\( 1991 \\\\) and \\\\( 2011 \\\\) is \\\\( 2011 - 1991 \\\\), or \\\\( 20 \\\\), years. Dividing \\\\( 167 \\\\) by \\\\( 20 \\\\) gives \\\\( 167/20 \\\\), or \\\\( 8.35 \\\\), thousand per year. Thus, the change in population per year from \\\\( 1991 \\\\) to \\\\( 2015 \\\\) estimated by the model is \\\\( 8.35 \\\\) thousand. The change in the number of years between \\\\( 2011 \\\\) and \\\\( 2015 \\\\) is \\\\( 2015 - 2011 \\\\), or \\\\( 4 \\\\), years. Multiplying the change in population per year by the change in number of years yields the increase in population from \\\\( 2011 \\\\) to \\\\( 2015 \\\\) estimated by the model: \\\\( (8.35)(4) \\\\), or \\\\( 33.4 \\\\), thousand. Adding the change in population from \\\\( 2011 \\\\) to \\\\( 2015 \\\\) estimated by the model to the estimated population in \\\\( 2011 \\\\) yields the estimated population in \\\\( 2015 \\\\). Thus, the estimated population in \\\\( 2015 \\\\) is \\\\( 33.4 + 224 \\\\), or \\\\( 257.4 \\\\), thousand. Therefore to the nearest whole number, the value of \\\\( x \\\\) is \\\\( 257 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Medium"
    }
  },
  {
    questionId: "50821477",
    externalId: "50821477",
    section: "Math",
    prompt: "<p>A window repair specialist charges \\\\( \\$220 \\\\) for the first two hours of repair plus an hourly fee for each additional hour. The total cost for \\\\( 5 \\\\) hours of repair is \\\\( \\$400 \\\\). Which function \\\\( f \\\\) gives the total cost, in dollars, for \\\\( x \\\\) hours of repair, where \\\\( x \\\\geq 2 \\\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( f(x) = 60x + 100 \\\\)</p>" },
        B: { body: "<p>\\\\( f(x) = 60x + 220 \\\\)</p>" },
        C: { body: "<p>\\\\( f(x) = 80x \\\\)</p>" },
        D: { body: "<p>\\\\( f(x) = 80x + 220 \\\\)</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is correct. It's given that the window repair specialist charges \\\\( \\$220 \\\\) for the first two hours of repair plus an hourly fee for each additional hour. Let \\\\( n \\\\) represent the hourly fee for each additional hour after the first two hours. Since it's given that \\\\( x \\\\) is the number of hours of repair, it follows that the charge generated by the hourly fee after the first two hours can be represented by the expression \\\\( n(x - 2) \\\\). Therefore, the total cost, in dollars, for \\\\( x \\\\) hours of repair is \\\\( f(x) = 220 + n(x - 2) \\\\). It's given that the total cost for \\\\( 5 \\\\) hours of repair is \\\\( \\$400 \\\\). Substituting \\\\( 5 \\\\) for \\\\( x \\\\) and \\\\( 400 \\\\) for \\\\( f(x) \\\\) into the equation \\\\( f(x) = 220 + n(x - 2) \\\\) yields \\\\( 400 = 220 + n(5 - 2) \\\\), or \\\\( 400 = 220 + 3n \\\\). Subtracting \\\\( 220 \\\\) from both sides of this equation yields \\\\( 180 = 3n \\\\). Dividing both sides of this equation by \\\\( 3 \\\\) yields \\\\( n = 60 \\\\). Substituting \\\\( 60 \\\\) for \\\\( n \\\\) in the equation \\\\( f(x) = 220 + n(x - 2) \\\\) yields \\\\( f(x) = 220 + 60(x - 2) \\\\), which is equivalent to \\\\( f(x) = 220 + 60x - 120 \\\\), or \\\\( f(x) = 60x + 100 \\\\). Therefore, the total cost, in dollars, for \\\\( x \\\\) hours of repair is \\\\( f(x) = 60x + 100 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Hard"
    }
  },
  {
    questionId: "b84c49da",
    externalId: "b84c49da",
    section: "Math",
    prompt: "<p>\\\\( y = 12x - 20 \\\\)<br>\\\\( y = 28 \\\\)<br>What is the solution \\\\( (x, y) \\\\) to the given system of equations?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( (4, 28) \\\\)</p>" },
        B: { body: "<p>\\\\( (20, 28) \\\\)</p>" },
        C: { body: "<p>\\\\( (28, 4) \\\\)</p>" },
        D: { body: "<p>\\\\( (28, 20) \\\\)</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is correct. The second equation in the given system is \\\\( y = 28 \\\\). Substituting \\\\( 28 \\\\) for \\\\( y \\\\) in the first equation in the given system yields \\\\( 28 = 12x - 20 \\\\). Adding \\\\( 20 \\\\) to both sides of this equation yields \\\\( 48 = 12x \\\\). Dividing both sides of this equation by \\\\( 12 \\\\) yields \\\\( 4 = x \\\\). Therefore, the solution \\\\( (x, y) \\\\) to the given system of equations is \\\\( (4, 28) \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Systems of two linear equations in two variables",
      difficulty: "Easy"
    }
  },
  {
    questionId: "4898aa47",
    externalId: "4898aa47",
    section: "Math",
    prompt: "<p>\\\\( \\\\frac{7}{2}x + 6y = 25 \\\\)<br>\\\\( \\\\frac{5}{2}x + 6y = 23 \\\\)<br>The solution to the given system of equations is \\\\( (x, y) \\\\). What is the value of \\\\( \\\\frac{17}{2}x + 18y \\\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( 2 \\\\)</p>" },
        B: { body: "<p>\\\\( 3 \\\\)</p>" },
        C: { body: "<p>\\\\( 48 \\\\)</p>" },
        D: { body: "<p>\\\\( 71 \\\\)</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. Multiplying the second equation in the given system by \\\\( 2 \\\\) yields \\\\( \\\\frac{10}{2}x + 12y = 46 \\\\). Adding this equation to the first equation in the system yields \\\\( \\\\left(\\\\frac{7}{2}x + 6y\\\\right) + \\\\left(\\\\frac{10}{2}x + 12y\\\\right) = 25 + 46 \\\\), which is equivalent to \\\\( \\\\left(\\\\frac{7}{2}x + \\\\frac{10}{2}x\\\\right) + (6y + 12y) = 25 + 46 \\\\), or \\\\( \\\\frac{17}{2}x + 18y = 71 \\\\). Therefore, the value of \\\\( \\\\frac{17}{2}x + 18y \\\\) is \\\\( 71 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Systems of two linear equations in two variables",
      difficulty: "Hard"
    }
  }
];

// Write each question to a separate JSON file
let successCount = 0;
let errorCount = 0;

questions.forEach((question) => {
  const filePath = path.join(outputDir, `${question.questionId}.json`);
  try {
    fs.writeFileSync(filePath, JSON.stringify(question, null, 2));
    successCount++;
    console.log(`Created: ${question.questionId}.json`);
  } catch (err) {
    errorCount++;
    console.error(`Error creating ${question.questionId}.json:`, err.message);
  }
});

console.log(`\nProcessing complete!`);
console.log(`Successfully created: ${successCount} files`);
console.log(`Errors: ${errorCount}`);
console.log(`Output directory: ${outputDir}`);
