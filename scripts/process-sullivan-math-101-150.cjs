const fs = require('fs');
const path = require('path');

// Output directory
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'bank', 'questions');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// All 50 questions extracted from the PDF
const questions = [
  {
    questionId: "d7941984",
    externalId: "d7941984",
    section: "Math",
    prompt: "<p>Lily made \\\\( 36 \\\\) cups of jam. Lily then filled \\\\( x \\\\) small containers and \\\\( y \\\\) large containers with all the jam she made. The equation \\\\( 4x + 6y = 36 \\\\) represents this situation. Which is the best interpretation of \\\\( 6y \\\\) in this context?</p>",
    answer: {
      choices: {
        A: { body: "<p>The number of large containers Lily filled</p>" },
        B: { body: "<p>The number of small containers Lily filled</p>" },
        C: { body: "<p>The total number of cups of jam in the large containers</p>" },
        D: { body: "<p>The total number of cups of jam in the small containers</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is correct. It's given that the equation \\\\( 4x + 6y = 36 \\\\) represents the situation where Lily filled \\\\( x \\\\) small containers and \\\\( y \\\\) large containers with all the jam she made, which was \\\\( 36 \\\\) cups. Therefore, \\\\( 6y \\\\) represents the total number of cups of jam in the large containers.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Medium"
    }
  },
  {
    questionId: "c3c9b8bc",
    externalId: "c3c9b8bc",
    section: "Math",
    prompt: "<p>The graph represents the total charge, in dollars, by an electrician for \\\\( x \\\\) hours of work. The electrician charges a onetime fee plus an hourly rate. What is the best interpretation of the slope of the graph?</p>",
    answer: {
      choices: {
        A: { body: "<p>The electrician's hourly rate</p>" },
        B: { body: "<p>The electrician's onetime fee</p>" },
        C: { body: "<p>The maximum amount that the electrician charges</p>" },
        D: { body: "<p>The total amount that the electrician charges</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is correct. It's given that the electrician charges a onetime fee plus an hourly rate. The graph shows a linear relationship in the xy-plane. Thus, the total charge \\\\( y \\\\), in dollars, for \\\\( x \\\\) hours of work can be represented as \\\\( y = mx + b \\\\), where \\\\( m \\\\) is the slope. Since the given graph represents the total charge, in dollars, by an electrician for \\\\( x \\\\) hours of work, it follows that its slope is \\\\( m \\\\), or the electrician's hourly rate.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Medium"
    }
  },
  {
    questionId: "e1a1754e",
    externalId: "e1a1754e",
    section: "Math",
    prompt: "<p>In a set of four consecutive odd integers, where the integers are ordered from least to greatest, the first integer is represented by \\\\( x \\\\). The product of \\\\( 12 \\\\) and the fourth odd integer is at most \\\\( 26 \\\\) less than the sum of the first and third odd integers. Which inequality represents this situation?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( 12(x + 6) \\leq x + (x + 4) - 26 \\\\)</p>" },
        B: { body: "<p>\\\\( 12(x + 6) \\geq 26 - (x + (x + 4)) \\\\)</p>" },
        C: { body: "<p>\\\\( 12(x + 4) \\leq x + (x + 3) - 26 \\\\)</p>" },
        D: { body: "<p>\\\\( 12(x + 4) \\geq 26 - (x + (x + 3)) \\\\)</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is correct. It's given that the four odd integers are consecutive, ordered from least to greatest, and that the first odd integer is represented by \\\\( x \\\\). It follows that the second odd integer is represented by \\\\( x + 2 \\\\), the third odd integer is represented by \\\\( x + 4 \\\\), and the fourth odd integer is represented by \\\\( x + 6 \\\\). Therefore, the product of \\\\( 12 \\\\) and the fourth odd integer is represented by \\\\( 12(x + 6) \\\\), and \\\\( 26 \\\\) less than the sum of the first and third odd integers is represented by \\\\( x + (x + 4) - 26 \\\\). Since the product of \\\\( 12 \\\\) and the fourth odd integer is at most \\\\( 26 \\\\) less than the sum of the first and third odd integers, it follows that \\\\( 12(x + 6) \\leq x + (x + 4) - 26 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear inequalities in one or two variables",
      difficulty: "Hard"
    }
  },
  {
    questionId: "827504df",
    externalId: "827504df",
    section: "Math",
    prompt: "<p>If \\\\( y = 5x + 10 \\\\), what is the value of \\\\( y \\\\) when \\\\( x = 8 \\\\)?</p>",
    answer: {
      choices: {},
      correctChoice: "50",
      style: "Free Response",
      rationale: "<p>The correct answer is \\\\( 50 \\\\). Substituting \\\\( 8 \\\\) for \\\\( x \\\\) in the given equation yields \\\\( y = 5(8) + 10 \\\\), or \\\\( y = 50 \\\\). Therefore, the value of \\\\( y \\\\) is \\\\( 50 \\\\) when \\\\( x = 8 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Easy"
    }
  },
  {
    questionId: "c73c84cc",
    externalId: "c73c84cc",
    section: "Math",
    prompt: "<p>The graph of \\\\( 9x - 10y = 19 \\\\) is translated down \\\\( 4 \\\\) units in the xy-plane. What is the x-coordinate of the x-intercept of the resulting graph?</p>",
    answer: {
      choices: {},
      correctChoice: "59/9",
      style: "Free Response",
      rationale: "<p>The correct answer is \\\\( \\frac{59}{9} \\\\). When the graph of an equation in the form \\\\( Ax + By = C \\\\) is translated down \\\\( k \\\\) units in the xy-plane, the resulting graph can be represented by the equation \\\\( Ax + B(y + k) = C \\\\). It's given that the graph of \\\\( 9x - 10y = 19 \\\\) is translated down \\\\( 4 \\\\) units. Therefore, the resulting graph can be represented by \\\\( 9x - 10(y + 4) = 19 \\\\), or \\\\( 9x - 10y - 40 = 19 \\\\). Adding \\\\( 40 \\\\) yields \\\\( 9x - 10y = 59 \\\\). Substituting \\\\( 0 \\\\) for \\\\( y \\\\) yields \\\\( 9x = 59 \\\\), so \\\\( x = \\frac{59}{9} \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Hard"
    }
  },
  {
    questionId: "35978b89",
    externalId: "35978b89",
    section: "Math",
    prompt: "<p>The point with coordinates \\\\( (d, 4) \\\\) lies on the line shown. What is the value of \\\\( d \\\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( \\frac{7}{2} \\\\)</p>" },
        B: { body: "<p>\\\\( \\frac{26}{7} \\\\)</p>" },
        C: { body: "<p>\\\\( \\frac{24}{7} \\\\)</p>" },
        D: { body: "<p>\\\\( \\frac{27}{8} \\\\)</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is correct. It's given from the graph that the points \\\\( (0, 7) \\\\) and \\\\( (8, 0) \\\\) lie on the line. The slope of the line can be calculated as \\\\( m = \\frac{0 - 7}{8 - 0} = -\\frac{7}{8} \\\\). It's also given that the point \\\\( (d, 4) \\\\) lies on the line. Substituting \\\\( (d, 4) \\\\) for \\\\( (x_2, y_2) \\\\), \\\\( (8, 0) \\\\) for \\\\( (x_1, y_1) \\\\), and \\\\( -\\frac{7}{8} \\\\) for \\\\( m \\\\) in the slope formula yields \\\\( -\\frac{7}{8} = \\frac{0 - 4}{8 - d} \\\\), solving gives \\\\( d = \\frac{24}{7} \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Hard"
    }
  },
  {
    questionId: "c4fb1cb3",
    externalId: "c4fb1cb3",
    section: "Math",
    prompt: "<p>A truck can haul a maximum weight of \\\\( 5{,}630 \\\\) pounds. During one trip, the truck will be used to haul a \\\\( 190 \\\\)-pound piece of equipment as well as several crates. Some of these crates weigh \\\\( 25 \\\\) pounds each and the others weigh \\\\( 62 \\\\) pounds each. Which inequality represents the possible combinations of the number of \\\\( 25 \\\\)-pound crates, \\\\( x \\\\), and the number of \\\\( 62 \\\\)-pound crates, \\\\( y \\\\), the truck can haul during one trip if only the piece of equipment and the crates are being hauled?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( 25x + 62y \\leq 5{,}440 \\\\)</p>" },
        B: { body: "<p>\\\\( 25x + 62y \\geq 5{,}440 \\\\)</p>" },
        C: { body: "<p>\\\\( 62x + 25y \\leq 5{,}630 \\\\)</p>" },
        D: { body: "<p>\\\\( 62x + 25y \\geq 5{,}630 \\\\)</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is correct. It's given that a truck can haul a maximum of \\\\( 5{,}630 \\\\) pounds. It's also given that during one trip, the truck will be used to haul a \\\\( 190 \\\\)-pound piece of equipment as well as several crates. It follows that the truck can haul at most \\\\( 5{,}630 - 190 \\\\), or \\\\( 5{,}440 \\\\), pounds of crates. Therefore, \\\\( 25x + 62y \\leq 5{,}440 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear inequalities in one or two variables",
      difficulty: "Medium"
    }
  },
  {
    questionId: "e34403e6",
    externalId: "e34403e6",
    section: "Math",
    prompt: "<p>In the linear function \\\\( f \\\\), \\\\( f(0) = 8 \\\\) and \\\\( f(1) = 12 \\\\). Which equation defines \\\\( f \\\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( f(x) = 12x + 8 \\\\)</p>" },
        B: { body: "<p>\\\\( f(x) = 4x \\\\)</p>" },
        C: { body: "<p>\\\\( f(x) = 4x + 12 \\\\)</p>" },
        D: { body: "<p>\\\\( f(x) = 4x + 8 \\\\)</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. Since \\\\( f \\\\) is a linear function, it can be defined by an equation of the form \\\\( f(x) = ax + b \\\\). It's given that \\\\( f(0) = 8 \\\\). Substituting \\\\( 0 \\\\) for \\\\( x \\\\) and \\\\( 8 \\\\) for \\\\( f(x) \\\\) yields \\\\( 8 = b \\\\). It's given that \\\\( f(1) = 12 \\\\). Substituting \\\\( 1 \\\\) for \\\\( x \\\\) and \\\\( 12 \\\\) for \\\\( f(x) \\\\) in \\\\( f(x) = ax + 8 \\\\) yields \\\\( 12 = a + 8 \\\\), so \\\\( a = 4 \\\\). Therefore, \\\\( f(x) = 4x + 8 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Medium"
    }
  },
  {
    questionId: "9a67367f",
    externalId: "9a67367f",
    section: "Math",
    prompt: "<p>The table gives the coordinates of two points on a line in the xy-plane. The y-intercept of the line is \\\\( (k - 5, b) \\\\), where \\\\( k \\\\) and \\\\( b \\\\) are constants. What is the value of \\\\( b \\\\)?</p>",
    answer: {
      choices: {},
      correctChoice: "33",
      style: "Free Response",
      rationale: "<p>The correct answer is \\\\( 33 \\\\). It's given in the table that the coordinates of two points on a line in the xy-plane are \\\\( (k, 13) \\\\) and \\\\( (k + 7, -15) \\\\). The slope of the line is \\\\( m = \\frac{-15 - 13}{k + 7 - k} = \\frac{-28}{7} = -4 \\\\). Using the y-intercept \\\\( (k - 5, b) \\\\) and the point \\\\( (k, 13) \\\\) with slope \\\\( -4 \\\\) yields \\\\( -4 = \\frac{13 - b}{k - (k - 5)} = \\frac{13 - b}{5} \\\\). Solving gives \\\\( -20 = 13 - b \\\\), so \\\\( b = 33 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Hard"
    }
  },
  {
    questionId: "5cd676da",
    externalId: "5cd676da",
    section: "Math",
    prompt: "<p>The cost of renting a carpet cleaner is \\\\( \\$52 \\\\) for the first day and \\\\( \\$26 \\\\) for each additional day. Which of the following functions gives the cost \\\\( C(d) \\\\), in dollars, of renting the carpet cleaner for \\\\( d \\\\) days, where \\\\( d \\\\) is a positive integer?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( C(d) = 26d + 26 \\\\)</p>" },
        B: { body: "<p>\\\\( C(d) = 26d + 52 \\\\)</p>" },
        C: { body: "<p>\\\\( C(d) = 52d - 26 \\\\)</p>" },
        D: { body: "<p>\\\\( C(d) = 52d + 78 \\\\)</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is correct. It's given that the cost of renting a carpet cleaner is \\\\( \\$52 \\\\) for the first day and \\\\( \\$26 \\\\) for each additional day. Therefore, the cost \\\\( C(d) \\\\) for \\\\( d \\\\) days is the sum of the cost for the first day, \\\\( \\$52 \\\\), and the cost for the additional \\\\( d - 1 \\\\) days, \\\\( \\$26(d - 1) \\\\). It follows that \\\\( C(d) = 52 + 26(d - 1) = 52 + 26d - 26 = 26d + 26 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Hard"
    }
  },
  {
    questionId: "db8d42ba",
    externalId: "db8d42ba",
    section: "Math",
    prompt: "<p>The minimum value of \\\\( x \\\\) is \\\\( 12 \\\\) less than \\\\( 6 \\\\) times another number \\\\( n \\\\). Which inequality shows the possible values of \\\\( x \\\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( x \\leq 6n - 12 \\\\)</p>" },
        B: { body: "<p>\\\\( x \\geq 6n - 12 \\\\)</p>" },
        C: { body: "<p>\\\\( x \\leq 12 - 6n \\\\)</p>" },
        D: { body: "<p>\\\\( x \\geq 12 - 6n \\\\)</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is correct. It's given that the minimum value of \\\\( x \\\\) is \\\\( 12 \\\\) less than \\\\( 6 \\\\) times another number \\\\( n \\\\). Therefore, the possible values of \\\\( x \\\\) are all greater than or equal to the value of \\\\( 12 \\\\) less than \\\\( 6 \\\\) times \\\\( n \\\\). The value of \\\\( 6 \\\\) times \\\\( n \\\\) is given by the expression \\\\( 6n \\\\). The value of \\\\( 12 \\\\) less than \\\\( 6n \\\\) is given by \\\\( 6n - 12 \\\\). Therefore, \\\\( x \\geq 6n - 12 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear inequalities in one or two variables",
      difficulty: "Medium"
    }
  },
  {
    questionId: "1cdd69a4",
    externalId: "1cdd69a4",
    section: "Math",
    prompt: "<p>The function \\\\( f \\\\) is defined by \\\\( f(x) = -9x + 9 \\\\). What is the y-coordinate of the y-intercept of the graph of \\\\( y = f(x) \\\\) in the xy-plane?</p>",
    answer: {
      choices: {},
      correctChoice: "9",
      style: "Free Response",
      rationale: "<p>The correct answer is \\\\( 9 \\\\). The y-intercept of the graph of \\\\( y = f(x) \\\\) in the xy-plane is the point where the graph crosses the y-axis, which occurs at \\\\( x = 0 \\\\). Substituting \\\\( 0 \\\\) for \\\\( x \\\\) in \\\\( f(x) = -9x + 9 \\\\) yields \\\\( y = -9(0) + 9 = 9 \\\\). Therefore, the y-coordinate of the y-intercept is \\\\( 9 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Medium"
    }
  },
  {
    questionId: "37e53339",
    externalId: "37e53339",
    section: "Math",
    prompt: "<p>A museum rents tablets to visitors. The museum earns revenue of \\\\( \\$14 \\\\) for each tablet rented for the day. On Wednesday, the museum earned \\\\( \\$406 \\\\) in profit from renting tablets after paying daily expenses of \\\\( \\$112 \\\\). How many tablets did the museum rent on Wednesday? (profit = total revenue - total expenses)</p>",
    answer: {
      choices: {},
      correctChoice: "37",
      style: "Free Response",
      rationale: "<p>The correct answer is \\\\( 37 \\\\). It's given that the museum earns revenue of \\\\( \\$14 \\\\) for each tablet rented for the day. Let \\\\( x \\\\) represent the number of tablets the museum rented on Wednesday. The total revenue is \\\\( 14x \\\\). Because profit = total revenue - total expenses, the equation \\\\( 406 = 14x - 112 \\\\) represents this situation. Adding \\\\( 112 \\\\) to both sides yields \\\\( 14x = 518 \\\\). Dividing by \\\\( 14 \\\\) yields \\\\( x = 37 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in one variable",
      difficulty: "Medium"
    }
  },
  {
    questionId: "95d2d776",
    externalId: "95d2d776",
    section: "Math",
    prompt: "<p>A producer is creating a video with a length of \\\\( 70 \\\\) minutes. The video will consist of segments that are \\\\( 1 \\\\) minute long and segments that are \\\\( 3 \\\\) minutes long. Which equation represents this situation, where \\\\( x \\\\) represents the number of 1-minute segments and \\\\( y \\\\) represents the number of 3-minute segments?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( 4xy = 70 \\\\)</p>" },
        B: { body: "<p>\\\\( 4(x + y) = 70 \\\\)</p>" },
        C: { body: "<p>\\\\( 3x + y = 70 \\\\)</p>" },
        D: { body: "<p>\\\\( x + 3y = 70 \\\\)</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. Since \\\\( x \\\\) represents the number of 1-minute segments and \\\\( y \\\\) represents the number of 3-minute segments, the total length of the video is \\\\( 1 \\cdot x + 3 \\cdot y \\\\), or \\\\( x + 3y \\\\), minutes. Since the video is \\\\( 70 \\\\) minutes long, the equation \\\\( x + 3y = 70 \\\\) represents this situation.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Easy"
    }
  },
  {
    questionId: "5363dc9a",
    externalId: "5363dc9a",
    section: "Math",
    prompt: "<p>Brian saves \\\\( \\frac{2}{5} \\\\) of the \\\\( \\$215 \\\\) he earns each week from his job. If Brian continues to save at this rate, how much money, in dollars, will Brian save in \\\\( 9 \\\\) weeks?</p>",
    answer: {
      choices: {},
      correctChoice: "774",
      style: "Free Response",
      rationale: "<p>The correct answer is \\\\( 774 \\\\). It's given that Brian saves \\\\( \\frac{2}{5} \\\\) of the \\\\( \\$215 \\\\) he earns each week from his job. Therefore, Brian saves \\\\( \\left(\\frac{2}{5}\\right)(\\$215) \\\\), or \\\\( \\$86 \\\\), per week. If Brian continues to save at this rate of \\\\( \\$86 \\\\) per week for \\\\( 9 \\\\) weeks, then he will save a total of \\\\( (9)(86) = 774 \\\\) dollars.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Medium"
    }
  },
  {
    questionId: "b72da2e7",
    externalId: "b72da2e7",
    section: "Math",
    prompt: "<p>Lorenzo purchased a box of cereal and some strawberries at the grocery store. Lorenzo paid \\\\( \\$2 \\\\) for the box of cereal and \\\\( \\$1.90 \\\\) per pound for the strawberries. If Lorenzo paid a total of \\\\( \\$9.60 \\\\) for the box of cereal and the strawberries, which of the following equations can be used to find \\\\( p \\\\), the number of pounds of strawberries Lorenzo purchased? (Assume there is no sales tax.)</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( 1.90p + 2 = 9.60 \\\\)</p>" },
        B: { body: "<p>\\\\( 1.90p - 2 = 9.60 \\\\)</p>" },
        C: { body: "<p>\\\\( 1.90 + 2p = 9.60 \\\\)</p>" },
        D: { body: "<p>\\\\( 1.90 - 2p = 9.60 \\\\)</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is correct. It's given that \\\\( p \\\\) represents the number of pounds of strawberries Lorenzo purchased and Lorenzo paid \\\\( \\$1.90 \\\\) per pound for the strawberries. The total amount paid for strawberries is \\\\( 1.90p \\\\). It's given that Lorenzo paid \\\\( \\$2 \\\\) for the box of cereal. If Lorenzo paid a total of \\\\( \\$9.60 \\\\), it follows that \\\\( 1.90p + 2 = 9.60 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in one variable",
      difficulty: "Easy"
    }
  },
  {
    questionId: "efaeaf88",
    externalId: "efaeaf88",
    section: "Math",
    prompt: "<p>\\\\( 5y = 10x + 11 \\\\)<br/>\\\\( -5y = 5x - 21 \\\\)<br/>The solution to the given system of equations is \\\\( (x, y) \\\\). What is the value of \\\\( 30x \\\\)?</p>",
    answer: {
      choices: {},
      correctChoice: "20",
      style: "Free Response",
      rationale: "<p>The correct answer is \\\\( 20 \\\\). Adding the first equation to the second equation in the given system yields \\\\( 5y - 5y = 10x + 5x + 11 - 21 \\\\), or \\\\( 0 = 15x - 10 \\\\). Adding \\\\( 10 \\\\) to both sides yields \\\\( 10 = 15x \\\\). Multiplying both sides by \\\\( 2 \\\\) yields \\\\( 20 = 30x \\\\). Therefore, the value of \\\\( 30x \\\\) is \\\\( 20 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Systems of two linear equations in two variables",
      difficulty: "Hard"
    }
  },
  {
    questionId: "8235f2ed",
    externalId: "8235f2ed",
    section: "Math",
    prompt: "<p>For the linear function \\\\( f \\\\), the table shows three values of \\\\( x \\\\) and their corresponding values of \\\\( f(x) \\\\). Which equation defines \\\\( f(x) \\\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( f(x) = 3x + 29 \\\\)</p>" },
        B: { body: "<p>\\\\( f(x) = 29x + 32 \\\\)</p>" },
        C: { body: "<p>\\\\( f(x) = 35x + 29 \\\\)</p>" },
        D: { body: "<p>\\\\( f(x) = 32x + 35 \\\\)</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is correct. An equation that defines a linear function \\\\( f \\\\) can be written in the form \\\\( f(x) = mx + b \\\\). It's given in the table that when \\\\( x = 0 \\\\), \\\\( f(x) = 29 \\\\). Substituting yields \\\\( 29 = m(0) + b \\\\), or \\\\( 29 = b \\\\). It's also given that when \\\\( x = 1 \\\\), \\\\( f(x) = 32 \\\\). Substituting yields \\\\( 32 = m(1) + 29 \\\\), so \\\\( m = 3 \\\\). Therefore, \\\\( f(x) = 3x + 29 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Easy"
    }
  },
  {
    questionId: "953ee38d",
    externalId: "953ee38d",
    section: "Math",
    prompt: "<p>A bowl contains \\\\( 20 \\\\) ounces of water. When the bowl is uncovered, the amount of water in the bowl decreases by \\\\( 1 \\\\) ounce every \\\\( 4 \\\\) days. If \\\\( 9 \\\\) ounces of water remain in this bowl, for how many days has it been uncovered?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( 3 \\\\)</p>" },
        B: { body: "<p>\\\\( 7 \\\\)</p>" },
        C: { body: "<p>\\\\( 36 \\\\)</p>" },
        D: { body: "<p>\\\\( 44 \\\\)</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. It's given that the bowl starts with \\\\( 20 \\\\) ounces of water and has \\\\( 9 \\\\) ounces remaining after a period of time. The amount lost is \\\\( 20 - 9 = 11 \\\\) ounces. It's given that the amount of water decreases by \\\\( 1 \\\\) ounce every \\\\( 4 \\\\) days. Letting \\\\( t \\\\) represent the number of days, \\\\( \\frac{1}{4} = \\frac{11}{t} \\\\). Multiplying both sides by \\\\( 4t \\\\) yields \\\\( t = 44 \\\\). Therefore, the bowl has been uncovered for \\\\( 44 \\\\) days.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in one variable",
      difficulty: "Medium"
    }
  },
  {
    questionId: "468f320e",
    externalId: "468f320e",
    section: "Math",
    prompt: "<p>Hana deposited a fixed amount into her bank account each month. The function \\\\( f(t) = 100 + 25t \\\\) gives the amount, in dollars, in Hana's bank account after \\\\( t \\\\) monthly deposits. What is the best interpretation of \\\\( 25 \\\\) in this context?</p>",
    answer: {
      choices: {
        A: { body: "<p>With each monthly deposit, the amount in Hana's bank account increased by \\\\( \\$25 \\\\).</p>" },
        B: { body: "<p>Before Hana made any monthly deposits, the amount in her bank account was \\\\( \\$25 \\\\).</p>" },
        C: { body: "<p>After \\\\( 1 \\\\) monthly deposit, the amount in Hana's bank account was \\\\( \\$25 \\\\).</p>" },
        D: { body: "<p>Hana made a total of \\\\( 25 \\\\) monthly deposits.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is correct. It's given that \\\\( t \\\\) represents the number of monthly deposits. In the given function \\\\( f(t) = 100 + 25t \\\\), the coefficient of \\\\( t \\\\) is \\\\( 25 \\\\). This means that for every increase in the value of \\\\( t \\\\) by \\\\( 1 \\\\), the value of \\\\( f(t) \\\\) increases by \\\\( 25 \\\\). It follows that with each monthly deposit, the amount in Hana's bank account increased by \\\\( \\$25 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Easy"
    }
  },
  {
    questionId: "6775509d",
    externalId: "6775509d",
    section: "Math",
    prompt: "<p>\\\\( x + y = 18 \\\\)<br/>\\\\( 5y = x \\\\)<br/>What is the solution \\\\( (x, y) \\\\) to the given system of equations?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( (15, 3) \\\\)</p>" },
        B: { body: "<p>\\\\( (16, 2) \\\\)</p>" },
        C: { body: "<p>\\\\( (17, 1) \\\\)</p>" },
        D: { body: "<p>\\\\( (18, 0) \\\\)</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is correct. The second equation in the given system defines the value of \\\\( x \\\\) as \\\\( 5y \\\\). Substituting \\\\( 5y \\\\) for \\\\( x \\\\) into the first equation yields \\\\( 5y + y = 18 \\\\) or \\\\( 6y = 18 \\\\). Dividing each side by \\\\( 6 \\\\) yields \\\\( y = 3 \\\\). Substituting \\\\( 3 \\\\) for \\\\( y \\\\) in the second equation yields \\\\( 5(3) = x \\\\) or \\\\( x = 15 \\\\). Therefore, the solution is \\\\( (15, 3) \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Systems of two linear equations in two variables",
      difficulty: "Easy"
    }
  },
  {
    questionId: "451f10be",
    externalId: "451f10be",
    section: "Math",
    prompt: "<p>\\\\( x = 10 \\\\)<br/>\\\\( y = x + 21 \\\\)<br/>The solution to the given system of equations is \\\\( (x, y) \\\\). What is the value of \\\\( y \\\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( 2.1 \\\\)</p>" },
        B: { body: "<p>\\\\( 10 \\\\)</p>" },
        C: { body: "<p>\\\\( 21 \\\\)</p>" },
        D: { body: "<p>\\\\( 31 \\\\)</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. It's given by the first equation in the given system of equations that \\\\( x = 10 \\\\). Substituting \\\\( 10 \\\\) for \\\\( x \\\\) in the second equation yields \\\\( y = 10 + 21 \\\\), or \\\\( y = 31 \\\\). Therefore, the value of \\\\( y \\\\) is \\\\( 31 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Systems of two linear equations in two variables",
      difficulty: "Easy"
    }
  },
  {
    questionId: "518befa8",
    externalId: "518befa8",
    section: "Math",
    prompt: "<p>Which of the following systems of linear equations has no solution?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( x = 3 \\\\)<br/>\\\\( y = 5 \\\\)</p>" },
        B: { body: "<p>\\\\( y = 6x + 6 \\\\)<br/>\\\\( y = 5x + 6 \\\\)</p>" },
        C: { body: "<p>\\\\( y = 16x + 3 \\\\)<br/>\\\\( y = 16x + 19 \\\\)</p>" },
        D: { body: "<p>\\\\( y = 5 \\\\)<br/>\\\\( y = 5x + 5 \\\\)</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is correct. A system of two linear equations in two variables has no solution if the graphs of the lines are distinct and parallel. In the equations \\\\( y = 16x + 3 \\\\) and \\\\( y = 16x + 19 \\\\), the values of \\\\( m \\\\) are each \\\\( 16 \\\\), and the values of \\\\( b \\\\) are \\\\( 3 \\\\) and \\\\( 19 \\\\), respectively. Since the slopes are the same, and the y-coordinates of the y-intercepts are different, the system has no solution.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Systems of two linear equations in two variables",
      difficulty: "Medium"
    }
  },
  {
    questionId: "95cc0b50",
    externalId: "95cc0b50",
    section: "Math",
    prompt: "<p>The graph of \\\\( 7x + 2y = -31 \\\\) in the xy-plane has an x-intercept at \\\\( (a, 0) \\\\) and a y-intercept at \\\\( (0, b) \\\\), where \\\\( a \\\\) and \\\\( b \\\\) are constants. What is the value of \\\\( \\frac{b}{a} \\\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( -\\frac{7}{2} \\\\)</p>" },
        B: { body: "<p>\\\\( -\\frac{2}{7} \\\\)</p>" },
        C: { body: "<p>\\\\( \\frac{2}{7} \\\\)</p>" },
        D: { body: "<p>\\\\( \\frac{7}{2} \\\\)</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. The x-coordinate \\\\( a \\\\) of the x-intercept can be found by substituting \\\\( 0 \\\\) for \\\\( y \\\\) in the given equation, which gives \\\\( 7x = -31 \\\\), or \\\\( x = -\\frac{31}{7} \\\\). So \\\\( a = -\\frac{31}{7} \\\\). The y-coordinate \\\\( b \\\\) of the y-intercept can be found by substituting \\\\( 0 \\\\) for \\\\( x \\\\), which gives \\\\( 2y = -31 \\\\), or \\\\( y = -\\frac{31}{2} \\\\). So \\\\( b = -\\frac{31}{2} \\\\). Therefore, \\\\( \\frac{b}{a} = \\frac{-\\frac{31}{2}}{-\\frac{31}{7}} = \\frac{7}{2} \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Hard"
    }
  },
  {
    questionId: "85ee1336",
    externalId: "85ee1336",
    section: "Math",
    prompt: "<p>The equation \\\\( 46 = 2a + 2b \\\\) gives the relationship between the side lengths \\\\( a \\\\) and \\\\( b \\\\) of a certain parallelogram. If \\\\( a = 9 \\\\), what is the value of \\\\( b \\\\)?</p>",
    answer: {
      choices: {},
      correctChoice: "14",
      style: "Free Response",
      rationale: "<p>The correct answer is \\\\( 14 \\\\). It's given that the equation \\\\( 46 = 2a + 2b \\\\) gives the relationship between the side lengths \\\\( a \\\\) and \\\\( b \\\\). Substituting \\\\( 9 \\\\) for \\\\( a \\\\) yields \\\\( 46 = 2(9) + 2b \\\\), or \\\\( 46 = 18 + 2b \\\\). Subtracting \\\\( 18 \\\\) from both sides yields \\\\( 28 = 2b \\\\). Dividing by \\\\( 2 \\\\) yields \\\\( b = 14 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Easy"
    }
  },
  {
    questionId: "e4db4454",
    externalId: "e4db4454",
    section: "Math",
    prompt: "<p>Line \\\\( h \\\\) is defined by \\\\( \\frac{1}{5}x + \\frac{1}{7}y - 70 = 0 \\\\). Line \\\\( j \\\\) is perpendicular to line \\\\( h \\\\) in the xy-plane. What is the slope of line \\\\( j \\\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( -\\frac{7}{5} \\\\)</p>" },
        B: { body: "<p>\\\\( -\\frac{5}{7} \\\\)</p>" },
        C: { body: "<p>\\\\( \\frac{7}{5} \\\\)</p>" },
        D: { body: "<p>\\\\( \\frac{5}{7} \\\\)</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. It's given that line \\\\( h \\\\) is defined by \\\\( \\frac{1}{5}x + \\frac{1}{7}y - 70 = 0 \\\\). Adding \\\\( 70 \\\\) to both sides yields \\\\( \\frac{1}{5}x + \\frac{1}{7}y = 70 \\\\). Subtracting \\\\( \\frac{1}{5}x \\\\) from both sides yields \\\\( \\frac{1}{7}y = -\\frac{1}{5}x + 70 \\\\). Multiplying by \\\\( 7 \\\\) yields \\\\( y = -\\frac{7}{5}x + 490 \\\\). Therefore, the slope of line \\\\( h \\\\) is \\\\( -\\frac{7}{5} \\\\). Line \\\\( j \\\\) is perpendicular to line \\\\( h \\\\), so its slope is the negative reciprocal of \\\\( -\\frac{7}{5} \\\\), which is \\\\( \\frac{5}{7} \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Hard"
    }
  },
  {
    questionId: "8ac533d5",
    externalId: "8ac533d5",
    section: "Math",
    prompt: "<p>A business owner plans to purchase the same model of chair for each of the \\\\( 81 \\\\) employees. The total budget to spend on these chairs is \\\\( \\$14{,}000 \\\\), which includes a \\\\( 7\\% \\\\) sales tax. Which of the following is closest to the maximum possible price per chair, before sales tax, the business owner could pay based on this budget?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( \\$148.15 \\\\)</p>" },
        B: { body: "<p>\\\\( \\$161.53 \\\\)</p>" },
        C: { body: "<p>\\\\( \\$172.84 \\\\)</p>" },
        D: { body: "<p>\\\\( \\$184.94 \\\\)</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is correct. It's given that a business owner plans to purchase \\\\( 81 \\\\) chairs. If \\\\( p \\\\) is the price per chair, the total price is \\\\( 81p \\\\). It's also given that \\\\( 7\\% \\\\) sales tax is included, which is \\\\( 81p \\\\) multiplied by \\\\( 1.07 \\\\), or \\\\( 81(1.07)p \\\\). Since the total budget is \\\\( \\$14{,}000 \\\\), the inequality is \\\\( 81(1.07)p \\leq 14{,}000 \\\\). Dividing by \\\\( 81(1.07) \\\\) yields \\\\( p \\leq 161.53 \\\\). Therefore, the maximum possible price per chair is \\\\( \\$161.53 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear inequalities in one or two variables",
      difficulty: "Hard"
    }
  },
  {
    questionId: "60488560",
    externalId: "60488560",
    section: "Math",
    prompt: "<p>The graph shows the possible combinations of the number of pounds of tangerines and lemons that could be purchased for \\\\( \\$18 \\\\) at a certain store. If Melvin purchased lemons and \\\\( 4 \\\\) pounds of tangerines for a total of \\\\( \\$18 \\\\), how many pounds of lemons did he purchase?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( 7 \\\\)</p>" },
        B: { body: "<p>\\\\( 10 \\\\)</p>" },
        C: { body: "<p>\\\\( 14 \\\\)</p>" },
        D: { body: "<p>\\\\( 16 \\\\)</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is correct. It's given that the graph shows the possible combinations of the number of pounds of tangerines, \\\\( x \\\\), and the number of pounds of lemons, \\\\( y \\\\), that could be purchased for \\\\( \\$18 \\\\). If Melvin purchased lemons and \\\\( 4 \\\\) pounds of tangerines for a total of \\\\( \\$18 \\\\), the number of pounds of lemons is represented by the y-coordinate of the point on the graph where \\\\( x = 4 \\\\). For the graph shown, when \\\\( x = 4 \\\\), \\\\( y = 10 \\\\). Therefore, he purchased \\\\( 10 \\\\) pounds of lemons.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Easy"
    }
  },
  {
    questionId: "a25615ce",
    externalId: "a25615ce",
    section: "Math",
    prompt: "<p>A line segment that has a length of \\\\( 115 \\\\) centimeters (cm) is divided into three parts. One part is \\\\( 47 \\\\) cm long. The other two parts have lengths that are equal to each other. What is the length, in cm, of one of the other two parts of equal length?</p>",
    answer: {
      choices: {},
      correctChoice: "34",
      style: "Free Response",
      rationale: "<p>The correct answer is \\\\( 34 \\\\). It's given that a line segment has a length of \\\\( 115 \\\\) cm and is divided into three parts, where one part is \\\\( 47 \\\\) cm long and the other two parts have lengths that are equal. If \\\\( x \\\\) represents the length of each of the two parts of equal length, then \\\\( 47 + x + x = 115 \\\\), or \\\\( 47 + 2x = 115 \\\\). Subtracting \\\\( 47 \\\\) from each side yields \\\\( 2x = 68 \\\\). Dividing by \\\\( 2 \\\\) yields \\\\( x = 34 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in one variable",
      difficulty: "Medium"
    }
  },
  {
    questionId: "6c050229",
    externalId: "6c050229",
    section: "Math",
    prompt: "<p>\\\\( x + 3 = -2y + 5 \\\\)<br/>\\\\( x - 3 = 2y + 7 \\\\)<br/>The solution to the given system of equations is \\\\( (x, y) \\\\). What is the value of \\\\( 2x \\\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( -2 \\\\)</p>" },
        B: { body: "<p>\\\\( 6 \\\\)</p>" },
        C: { body: "<p>\\\\( 12 \\\\)</p>" },
        D: { body: "<p>\\\\( 24 \\\\)</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is correct. Adding the second equation to the first equation yields \\\\( (x + 3) + (x - 3) = (-2y + 5) + (2y + 7) \\\\). Adding like terms yields \\\\( 2x = 12 \\\\). Thus, the value of \\\\( 2x \\\\) is \\\\( 12 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Systems of two linear equations in two variables",
      difficulty: "Medium"
    }
  },
  {
    questionId: "a2bf1dd6",
    externalId: "a2bf1dd6",
    section: "Math",
    prompt: "<p>Line \\\\( k \\\\) is defined by \\\\( y = 7x + \\frac{1}{8} \\\\). Line \\\\( j \\\\) is perpendicular to line \\\\( k \\\\) in the xy-plane. What is the slope of line \\\\( j \\\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( -8 \\\\)</p>" },
        B: { body: "<p>\\\\( -\\frac{1}{7} \\\\)</p>" },
        C: { body: "<p>\\\\( \\frac{1}{8} \\\\)</p>" },
        D: { body: "<p>\\\\( 7 \\\\)</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is correct. It's given that line \\\\( k \\\\) is defined by \\\\( y = 7x + \\frac{1}{8} \\\\). For an equation in slope-intercept form \\\\( y = mx + b \\\\), \\\\( m \\\\) represents the slope of the line. Therefore, the slope of line \\\\( k \\\\) is \\\\( 7 \\\\). It's also given that line \\\\( j \\\\) is perpendicular to line \\\\( k \\\\). Therefore, the slope of line \\\\( j \\\\) is the opposite reciprocal of the slope of line \\\\( k \\\\). The opposite reciprocal of \\\\( 7 \\\\) is \\\\( -\\frac{1}{7} \\\\). Therefore, the slope of line \\\\( j \\\\) is \\\\( -\\frac{1}{7} \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Medium"
    }
  },
  {
    questionId: "49dc0f69",
    externalId: "49dc0f69",
    section: "Math",
    prompt: "<p>The function \\\\( f \\\\) is defined by the equation \\\\( f(x) = 100x + 2 \\\\). What is the value of \\\\( f(x) \\\\) when \\\\( x = 9 \\\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( 111 \\\\)</p>" },
        B: { body: "<p>\\\\( 118 \\\\)</p>" },
        C: { body: "<p>\\\\( 900 \\\\)</p>" },
        D: { body: "<p>\\\\( 902 \\\\)</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. Substituting \\\\( 9 \\\\) for \\\\( x \\\\) in the given equation yields \\\\( f(9) = 100(9) + 2 \\\\), or \\\\( f(9) = 902 \\\\). Therefore, the value of \\\\( f(x) \\\\) when \\\\( x = 9 \\\\) is \\\\( 902 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Easy"
    }
  },
  {
    questionId: "51459b74",
    externalId: "51459b74",
    section: "Math",
    prompt: "<p>The table shows the linear relationship between the number of cars, \\\\( c \\\\), on a commuter train and the maximum number of passengers and crew, \\\\( p \\\\), that the train can carry. Which equation represents the linear relationship between \\\\( c \\\\) and \\\\( p \\\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( 55c - p = -9 \\\\)</p>" },
        B: { body: "<p>\\\\( 55c - p = 9 \\\\)</p>" },
        C: { body: "<p>\\\\( 55p - c = -9 \\\\)</p>" },
        D: { body: "<p>\\\\( 55p - c = 9 \\\\)</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is correct. It's given that there is a linear relationship between the number of cars, \\\\( c \\\\), and the maximum number of passengers and crew, \\\\( p \\\\). Using the values in the table, the rate of change is \\\\( \\frac{284 - 174}{5 - 3} = \\frac{110}{2} = 55 \\\\). So \\\\( p = 55c + b \\\\). Substituting \\\\( c = 10 \\\\) and \\\\( p = 559 \\\\) yields \\\\( 559 = 55(10) + b \\\\), or \\\\( 559 = 550 + b \\\\), so \\\\( b = 9 \\\\). Therefore, \\\\( p = 55c + 9 \\\\). Subtracting \\\\( p \\\\) from both sides yields \\\\( -9 = 55c - p \\\\), or \\\\( 55c - p = -9 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Medium"
    }
  },
  {
    questionId: "a5ed4369",
    externalId: "a5ed4369",
    section: "Math",
    prompt: "<p>The function \\\\( f \\\\) is defined by \\\\( f(x) = 8x \\\\). For what value of \\\\( x \\\\) does \\\\( f(x) = 72 \\\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( 8 \\\\)</p>" },
        B: { body: "<p>\\\\( 9 \\\\)</p>" },
        C: { body: "<p>\\\\( 64 \\\\)</p>" },
        D: { body: "<p>\\\\( 80 \\\\)</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is correct. Substituting \\\\( 72 \\\\) for \\\\( f(x) \\\\) in the given function yields \\\\( 72 = 8x \\\\). Dividing each side by \\\\( 8 \\\\) yields \\\\( 9 = x \\\\). Therefore, \\\\( f(x) = 72 \\\\) when the value of \\\\( x \\\\) is \\\\( 9 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Easy"
    }
  },
  {
    questionId: "8aa9a086",
    externalId: "8aa9a086",
    section: "Math",
    prompt: "<p>The perimeter of an isosceles triangle is \\\\( 36 \\\\) feet. Each of the two congruent sides of the triangle has a length of \\\\( 10 \\\\) feet. What is the length, in feet, of the third side?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( 10 \\\\)</p>" },
        B: { body: "<p>\\\\( 12 \\\\)</p>" },
        C: { body: "<p>\\\\( 16 \\\\)</p>" },
        D: { body: "<p>\\\\( 18 \\\\)</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is correct. It's given that the perimeter of an isosceles triangle is \\\\( 36 \\\\) feet and that each of the two congruent sides has a length of \\\\( 10 \\\\) feet. The perimeter of a triangle is the sum of the lengths of its three sides. The equation \\\\( 10 + 10 + x = 36 \\\\) can be used to represent this situation. Combining like terms yields \\\\( 20 + x = 36 \\\\). Subtracting \\\\( 20 \\\\) from each side yields \\\\( x = 16 \\\\). Therefore, the length of the third side is \\\\( 16 \\\\) feet.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in one variable",
      difficulty: "Easy"
    }
  },
  {
    questionId: "89cf1784",
    externalId: "89cf1784",
    section: "Math",
    prompt: "<p>\\\\( y = 6x + 16 \\\\)<br/>\\\\( -7x - y = 36 \\\\)<br/>What is the solution \\\\( (x, y) \\\\) to the given system of equations?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( (-4, -8) \\\\)</p>" },
        B: { body: "<p>\\\\( \\left(-\\frac{20}{13}, -\\frac{80}{13}\\right) \\\\)</p>" },
        C: { body: "<p>\\\\( (4, 40) \\\\)</p>" },
        D: { body: "<p>\\\\( (20, 136) \\\\)</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is correct. The given system of linear equations can be solved by the substitution method. The first equation defines \\\\( y \\\\) as \\\\( 6x + 16 \\\\). Substituting \\\\( 6x + 16 \\\\) for \\\\( y \\\\) in the second equation yields \\\\( -7x - (6x + 16) = 36 \\\\). Applying the distributive property yields \\\\( -7x - 6x - 16 = 36 \\\\), or \\\\( -13x - 16 = 36 \\\\). Adding \\\\( 16 \\\\) to both sides yields \\\\( -13x = 52 \\\\). Dividing by \\\\( -13 \\\\) yields \\\\( x = -4 \\\\). Substituting \\\\( -4 \\\\) for \\\\( x \\\\) in the first equation yields \\\\( y = 6(-4) + 16 = -8 \\\\). Therefore, the solution is \\\\( (-4, -8) \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Systems of two linear equations in two variables",
      difficulty: "Medium"
    }
  },
  {
    questionId: "cd13910e",
    externalId: "cd13910e",
    section: "Math",
    prompt: "<p>What is the slope of the graph of \\\\( y = \\frac{5x}{13} - 23 \\\\) in the xy-plane?</p>",
    answer: {
      choices: {},
      correctChoice: "5/13",
      style: "Free Response",
      rationale: "<p>The correct answer is \\\\( \\frac{5}{13} \\\\). The graph of a line in the xy-plane can be represented by the equation \\\\( y = mx + b \\\\), where \\\\( m \\\\) is the slope of the line and \\\\( b \\\\) is the y-coordinate of the y-intercept. The given equation can be written as \\\\( y = \\left(\\frac{5}{13}\\right)x - 23 \\\\). Therefore, the slope of the graph of this equation is \\\\( \\frac{5}{13} \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Medium"
    }
  },
  {
    questionId: "6db418b9",
    externalId: "6db418b9",
    section: "Math",
    prompt: "<p>The graph of a system of two linear equations is shown. What is the solution \\\\( (x, y) \\\\) to the system?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( (0, 4) \\\\)</p>" },
        B: { body: "<p>\\\\( (2, 2) \\\\)</p>" },
        C: { body: "<p>\\\\( (4, 0) \\\\)</p>" },
        D: { body: "<p>\\\\( (4, 4) \\\\)</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is correct. The solution to this system of linear equations is represented by the point that lies on both lines shown, or the point of intersection of the two lines. According to the graph, the point of intersection occurs when \\\\( x = 2 \\\\) and \\\\( y = 2 \\\\), or at the point \\\\( (2, 2) \\\\). Therefore, the solution to the system is \\\\( (2, 2) \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Systems of two linear equations in two variables",
      difficulty: "Easy"
    }
  },
  {
    questionId: "bea3ba96",
    externalId: "bea3ba96",
    section: "Math",
    prompt: "<p>\\\\( 24.5x + 24.75y = 641 \\\\)<br/>Isabel ordered topsoil and crushed stone, which cost a total of \\\\( \\$641 \\\\), for her garden. The given equation represents the relationship between the number of cubic yards of topsoil, \\\\( x \\\\), and the number of tons of crushed stone, \\\\( y \\\\), Isabel ordered. How much more, in dollars, did a ton of crushed stone cost Isabel than a cubic yard of topsoil?</p>",
    answer: {
      choices: {},
      correctChoice: "0.25",
      style: "Free Response",
      rationale: "<p>The correct answer is \\\\( 0.25 \\\\). It's given that the topsoil and crushed stone Isabel ordered for her garden cost a total of \\\\( \\$641 \\\\). Since \\\\( x \\\\) represents the number of cubic yards of topsoil ordered, \\\\( 24.5x \\\\) represents the total cost of the topsoil, and the cost per cubic yard is \\\\( \\$24.50 \\\\). Similarly, \\\\( 24.75y \\\\) represents the total cost of crushed stone, and the cost per ton is \\\\( \\$24.75 \\\\). Therefore, a ton of crushed stone cost Isabel \\\\( 24.75 - 24.50 = 0.25 \\\\), or \\\\( \\$0.25 \\\\), more than a cubic yard of topsoil.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Medium"
    }
  },
  {
    questionId: "d6a4f60f",
    externalId: "d6a4f60f",
    section: "Math",
    prompt: "<p>During spring migration, a dragonfly traveled a minimum of \\\\( 1{,}510 \\\\) miles and a maximum of \\\\( 4{,}130 \\\\) miles between stopover locations. Which inequality represents this situation, where \\\\( d \\\\) is a possible distance, in miles, this dragonfly traveled between stopover locations during spring migration?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( d \\leq 1{,}510 \\\\)</p>" },
        B: { body: "<p>\\\\( 1{,}510 \\leq d \\leq 4{,}130 \\\\)</p>" },
        C: { body: "<p>\\\\( d \\geq 4{,}130 \\\\)</p>" },
        D: { body: "<p>\\\\( 4{,}130 \\leq d \\leq 5{,}640 \\\\)</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is correct. It's given that during spring migration, a dragonfly traveled a minimum of \\\\( 1{,}510 \\\\) miles and a maximum of \\\\( 4{,}130 \\\\) miles between stopover locations. It's also given that \\\\( d \\\\) represents a possible distance, in miles. It follows that the inequality \\\\( 1{,}510 \\leq d \\leq 4{,}130 \\\\) represents this situation.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear inequalities in one or two variables",
      difficulty: "Easy"
    }
  },
  {
    questionId: "9843892f",
    externalId: "9843892f",
    section: "Math",
    prompt: "<p>\\\\( 3y = 4x + 17 \\\\)<br/>\\\\( -3y = 9x - 23 \\\\)<br/>The solution to the given system of equations is \\\\( (x, y) \\\\). What is the value of \\\\( 39x \\\\)?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( -18 \\\\)</p>" },
        B: { body: "<p>\\\\( -6 \\\\)</p>" },
        C: { body: "<p>\\\\( 6 \\\\)</p>" },
        D: { body: "<p>\\\\( 18 \\\\)</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. Adding the second equation to the first equation in the given system of equations yields \\\\( 3y - 3y = 4x + 9x + 17 - 23 \\\\), or \\\\( 0 = 13x - 6 \\\\). Adding \\\\( 6 \\\\) to each side of this equation yields \\\\( 6 = 13x \\\\). Multiplying each side of this equation by \\\\( 3 \\\\) yields \\\\( 18 = 39x \\\\). Therefore, the value of \\\\( 39x \\\\) is \\\\( 18 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Systems of two linear equations in two variables",
      difficulty: "Medium"
    }
  },
  {
    questionId: "15c9443f",
    externalId: "15c9443f",
    section: "Math",
    prompt: "<p>The graph of a system of linear equations is shown. What is the solution \\\\( (x, y) \\\\) to the system?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( (2, 3) \\\\)</p>" },
        B: { body: "<p>\\\\( (3, 4) \\\\)</p>" },
        C: { body: "<p>\\\\( (4, 5) \\\\)</p>" },
        D: { body: "<p>\\\\( (5, 6) \\\\)</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is correct. If a point \\\\( (x, y) \\\\) lies on both lines in the graph of a system of two linear equations, the ordered pair \\\\( (x, y) \\\\) is a solution to the system. The graph shown is the graph of a system of two linear equations, where the two lines in the graph intersect at the point \\\\( (3, 4) \\\\). Therefore, the point \\\\( (3, 4) \\\\) lies on both lines, so the ordered pair \\\\( (3, 4) \\\\) is the solution to the system.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Systems of two linear equations in two variables",
      difficulty: "Easy"
    }
  },
  {
    questionId: "df8ae774",
    externalId: "df8ae774",
    section: "Math",
    prompt: "<p>\\\\( 3(kx + 13) = \\frac{48}{17}x + 36 \\\\)<br/>In the given equation, \\\\( k \\\\) is a constant. The equation has no solution. What is the value of \\\\( k \\\\)?</p>",
    answer: {
      choices: {},
      correctChoice: "16/17",
      style: "Free Response",
      rationale: "<p>The correct answer is \\\\( \\frac{16}{17} \\\\). It's given that the equation has no solution. A linear equation in the form \\\\( ax + b = cx + d \\\\) has no solution only when the coefficients of \\\\( x \\\\) on each side of the equation are equal and the constant terms aren't equal. Dividing both sides of the given equation by \\\\( 3 \\\\) yields \\\\( kx + 13 = \\frac{48}{51}x + 12 \\\\), or \\\\( kx + 13 = \\frac{16}{17}x + 12 \\\\). Since the coefficients of \\\\( x \\\\) on each side of the equation must be equal, it follows that \\\\( k = \\frac{16}{17} \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in one variable",
      difficulty: "Hard"
    }
  },
  {
    questionId: "b728de55",
    externalId: "b728de55",
    section: "Math",
    prompt: "<p>If \\\\( \\frac{6}{7}p + 18 = 54 \\\\), what is the value of \\\\( 7p \\\\)?</p>",
    answer: {
      choices: {},
      correctChoice: "294",
      style: "Free Response",
      rationale: "<p>The correct answer is \\\\( 294 \\\\). Subtracting \\\\( 18 \\\\) from each side of the given equation yields \\\\( \\frac{6}{7}p = 36 \\\\). Multiplying each side of this equation by \\\\( \\frac{7}{6} \\\\) yields \\\\( p = 42 \\\\). Multiplying each side of this equation by \\\\( 7 \\\\) yields \\\\( 7p = 294 \\\\). Therefore, the value of \\\\( 7p \\\\) is \\\\( 294 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in one variable",
      difficulty: "Medium"
    }
  },
  {
    questionId: "26c19603",
    externalId: "26c19603",
    section: "Math",
    prompt: "<p>The y-intercept of the graph of \\\\( 12x + 2y = 18 \\\\) in the xy-plane is \\\\( (0, y) \\\\). What is the value of \\\\( y \\\\)?</p>",
    answer: {
      choices: {},
      correctChoice: "9",
      style: "Free Response",
      rationale: "<p>The correct answer is \\\\( 9 \\\\). It's given that the y-intercept of the graph of \\\\( 12x + 2y = 18 \\\\) in the xy-plane is \\\\( (0, y) \\\\). Substituting \\\\( 0 \\\\) for \\\\( x \\\\) in the equation \\\\( 12x + 2y = 18 \\\\) yields \\\\( 12(0) + 2y = 18 \\\\), or \\\\( 2y = 18 \\\\). Dividing both sides of this equation by \\\\( 2 \\\\) yields \\\\( y = 9 \\\\). Therefore, the value of \\\\( y \\\\) is \\\\( 9 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Easy"
    }
  },
  {
    questionId: "0edb622e",
    externalId: "0edb622e",
    section: "Math",
    prompt: "<p>If the graph of \\\\( 27x + 33y = 297 \\\\) is shifted down \\\\( 5 \\\\) units in the xy-plane, what is the y-intercept of the resulting graph?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( (0, 4) \\\\)</p>" },
        B: { body: "<p>\\\\( (0, 6) \\\\)</p>" },
        C: { body: "<p>\\\\( (0, 14) \\\\)</p>" },
        D: { body: "<p>\\\\( (0, 28) \\\\)</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is correct. When the graph of an equation in the form \\\\( Ax + By = C \\\\) is shifted down \\\\( k \\\\) units in the xy-plane, the resulting graph can be represented by the equation \\\\( Ax + B(y + k) = C \\\\). It's given that the graph of \\\\( 27x + 33y = 297 \\\\) is shifted down \\\\( 5 \\\\) units. Therefore, the resulting graph can be represented by the equation \\\\( 27x + 33(y + 5) = 297 \\\\), or \\\\( 27x + 33y + 165 = 297 \\\\). Subtracting \\\\( 165 \\\\) from both sides yields \\\\( 27x + 33y = 132 \\\\). The y-intercept is the point where \\\\( x = 0 \\\\). Substituting \\\\( 0 \\\\) for \\\\( x \\\\) yields \\\\( 33y = 132 \\\\). Dividing by \\\\( 33 \\\\) yields \\\\( y = 4 \\\\). Therefore, the y-intercept of the resulting graph is \\\\( (0, 4) \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Medium"
    }
  },
  {
    questionId: "f1a5302a",
    externalId: "f1a5302a",
    section: "Math",
    prompt: "<p>A geologist estimates that the volume of a slab of granite is greater than \\\\( 12.7 \\\\) cubic feet but less than \\\\( 15.7 \\\\) cubic feet. The geologist also estimates that the slab of granite weighs \\\\( 165 \\\\) pounds per cubic foot of volume. Which inequality represents this situation, where \\\\( x \\\\) represents the estimated total weight, in pounds, of the slab of granite?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( 165 - 15.7 < x < 165 - 12.7 \\\\)</p>" },
        B: { body: "<p>\\\\( 165 + 12.7 < x < 165 + 15.7 \\\\)</p>" },
        C: { body: "<p>\\\\( 165(12.7) < x < 165(15.7) \\\\)</p>" },
        D: { body: "<p>\\\\( \\frac{165}{15.7} < x < \\frac{165}{12.7} \\\\)</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is correct. It's given that the estimated volume is greater than \\\\( 12.7 \\\\) cubic feet but less than \\\\( 15.7 \\\\) cubic feet. It's also given that the estimated weight per cubic foot is \\\\( 165 \\\\) pounds. The estimated total weight can be calculated by multiplying the estimated volume by the estimated weight per cubic foot. Therefore, if the estimated volume is \\\\( 12.7 \\\\) cubic feet, its estimated total weight is \\\\( 165(12.7) \\\\) pounds, and if the estimated volume is \\\\( 15.7 \\\\) cubic feet, its estimated total weight is \\\\( 165(15.7) \\\\) pounds. Since the estimated volume is greater than \\\\( 12.7 \\\\) cubic feet but less than \\\\( 15.7 \\\\) cubic feet, the estimated total weight \\\\( x \\\\), in pounds, must be greater than \\\\( 165(12.7) \\\\) and less than \\\\( 165(15.7) \\\\). This situation can be represented by the inequality \\\\( 165(12.7) < x < 165(15.7) \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear inequalities in one or two variables",
      difficulty: "Easy"
    }
  },
  {
    questionId: "dfb6b432",
    externalId: "dfb6b432",
    section: "Math",
    prompt: "<p>Scientists collected fallen acorns that each housed a colony of the ant species P. ohioensis and analyzed each colony's structure. For any of these colonies, if the colony has \\\\( x \\\\) worker ants, the equation \\\\( y = 0.67x + 2.6 \\\\), where \\\\( 20 \\leq x \\leq 110 \\\\), gives the predicted number of larvae, \\\\( y \\\\), in the colony. If one of these colonies has \\\\( 58 \\\\) worker ants, which of the following is closest to the predicted number of larvae in the colony?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( 41 \\\\)</p>" },
        B: { body: "<p>\\\\( 61 \\\\)</p>" },
        C: { body: "<p>\\\\( 83 \\\\)</p>" },
        D: { body: "<p>\\\\( 190 \\\\)</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is correct. It's given that the equation \\\\( y = 0.67x + 2.6 \\\\), where \\\\( 20 \\leq x \\leq 110 \\\\), gives the predicted number of larvae, \\\\( y \\\\), in a colony of ants if the colony has \\\\( x \\\\) worker ants. If one of these colonies has \\\\( 58 \\\\) worker ants, the predicted number of larvae can be found by substituting \\\\( 58 \\\\) for \\\\( x \\\\) in the given equation. Substituting \\\\( 58 \\\\) for \\\\( x \\\\) yields \\\\( y = 0.67(58) + 2.6 \\\\), or \\\\( y = 41.46 \\\\). Of the given choices, \\\\( 41 \\\\) is closest to the predicted number of larvae in the colony.</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear functions",
      difficulty: "Medium"
    }
  },
  {
    questionId: "ae4f73e4",
    externalId: "ae4f73e4",
    section: "Math",
    prompt: "<p>During a portion of a flight, a small airplane's cruising speed varied between \\\\( 150 \\\\) miles per hour and \\\\( 170 \\\\) miles per hour. Which inequality best represents this situation, where \\\\( s \\\\) is the cruising speed, in miles per hour, during this portion of the flight?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( s \\leq 20 \\\\)</p>" },
        B: { body: "<p>\\\\( s \\leq 150 \\\\)</p>" },
        C: { body: "<p>\\\\( s \\leq 170 \\\\)</p>" },
        D: { body: "<p>\\\\( 150 \\leq s \\leq 170 \\\\)</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. It's given that during a portion of a flight, a small airplane's cruising speed varied between \\\\( 150 \\\\) miles per hour and \\\\( 170 \\\\) miles per hour. It's also given that \\\\( s \\\\) represents the cruising speed, in miles per hour. It follows that the airplane's cruising speed was at least \\\\( 150 \\\\), which means \\\\( s \\geq 150 \\\\), and was at most \\\\( 170 \\\\), which means \\\\( s \\leq 170 \\\\). Therefore, the inequality that best represents this situation is \\\\( 150 \\leq s \\leq 170 \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear inequalities in one or two variables",
      difficulty: "Easy"
    }
  },
  {
    questionId: "7ae15e38",
    externalId: "7ae15e38",
    section: "Math",
    prompt: "<p>The table shows three values of \\\\( x \\\\) and their corresponding values of \\\\( y \\\\). There is a linear relationship between \\\\( x \\\\) and \\\\( y \\\\). Which of the following equations represents this relationship?</p>",
    answer: {
      choices: {
        A: { body: "<p>\\\\( y = 18x + 13 \\\\)</p>" },
        B: { body: "<p>\\\\( y = 18x + 18 \\\\)</p>" },
        C: { body: "<p>\\\\( y = -5x + 13 \\\\)</p>" },
        D: { body: "<p>\\\\( y = -5x + 18 \\\\)</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is correct. A linear relationship can be represented by an equation of the form \\\\( y = mx + b \\\\). It's given in the table that when \\\\( x = 0 \\\\), \\\\( y = 18 \\\\). Substituting yields \\\\( 18 = m(0) + b \\\\), or \\\\( 18 = b \\\\). It's also given in the table that when \\\\( x = 1 \\\\), \\\\( y = 13 \\\\). Substituting yields \\\\( 13 = m(1) + 18 \\\\), or \\\\( 13 = m + 18 \\\\). Subtracting \\\\( 18 \\\\) from both sides yields \\\\( -5 = m \\\\). Therefore, the equation \\\\( y = -5x + 18 \\\\) represents the relationship between \\\\( x \\\\) and \\\\( y \\\\).</p>"
    },
    metadata: {
      domain: "Algebra",
      skill: "Linear equations in two variables",
      difficulty: "Easy"
    }
  }
];

// Generate JSON files for each question
let count = 0;
questions.forEach((question) => {
  const filename = `${question.questionId}.json`;
  const filepath = path.join(OUTPUT_DIR, filename);

  fs.writeFileSync(filepath, JSON.stringify(question, null, 2));
  count++;
  console.log(`Created: ${filename}`);
});

console.log(`\nTotal questions processed: ${count}`);
