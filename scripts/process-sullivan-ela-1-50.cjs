const fs = require('fs');
const path = require('path');

// Output directory for JSON files
const outputDir = path.join(__dirname, '..', 'public', 'bank', 'questions');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// All 50 questions extracted from sullivan ela 1-50.pdf
const questions = [
  {
    questionId: "2cd8bd76",
    externalId: "2cd8bd76",
    section: "Reading and Writing",
    prompt: "<p>Argentina, Brazil, and the United States are among the world's leading producers of maize (corn), and each country exports a certain percentage of maize each marketing year, which runs from March to February in Argentina and Brazil and from September to August in the United States. A student is researching those percentages and finds that for the marketing year 2012/2013, the percentage of maize exported by ______</p><p>Which choice most effectively uses data from the graph to complete the text?</p>",
    answer: {
      choices: {
        A: { body: "<p>Brazil increased from the previous marketing year but remained lower than the percentage exported by the United States.</p>" },
        B: { body: "<p>Brazil exceeded the percentage exported by Argentina for the first time.</p>" },
        C: { body: "<p>Argentina decreased from the previous marketing year but remained the highest among the three countries.</p>" },
        D: { body: "<p>the United States reached its highest point during the five marketing years.</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is the best answer because it most effectively uses data from the graph to complete the text's discussion of the percentages of maize exported in the marketing year 2012/2013. The graph presents percentages of maize exported by Argentina, Brazil, and the United States in marketing years 2009/2010 to 2013/2014 and indicates that for the marketing year 2012/2013, the percentage of maize exported by Argentina decreased to about 70 percent from about 80 percent in the previous marketing year. The graph also shows that the percentage of maize exported by Argentina remained highest among the three countries in the marketing year 2012/2013, surpassing the percentage exported by Brazil (about 31 percent) and by the United States (about 8 percent).</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Medium"
    }
  },
  {
    questionId: "a0120582",
    externalId: "a0120582",
    section: "Reading and Writing",
    prompt: "<p>High levels of public uncertainty about which economic policies a country will adopt can make planning difficult for businesses, but measures of such uncertainty have not tended to be very detailed. Recently, however, economist Sandile Hlatshwayo analyzed trends in news reports to derive measures not only for general economic policy uncertainty but also for uncertainty related to specific areas of economic policy, like tax or trade policy. One revelation of her work is that a general measure may not fully reflect uncertainty about specific areas of policy, as in the case of the United Kingdom, where general economic policy uncertainty ______</p><p>Which choice most effectively uses data from the graph to illustrate the claim?</p>",
    answer: {
      choices: {
        A: { body: "<p>aligned closely with uncertainty about tax and public spending policy in 2005 but differed from uncertainty about tax and public spending policy by a large amount in 2009.</p>" },
        B: { body: "<p>was substantially lower than uncertainty about tax and public spending policy each year from 2005 to 2010.</p>" },
        C: { body: "<p>reached its highest level between 2005 and 2010 in the same year that uncertainty about trade policy and tax and public spending policy reached their lowest levels.</p>" },
        D: { body: "<p>was substantially lower than uncertainty about trade policy in 2005 and substantially higher than uncertainty about trade policy in 2010.</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is the best answer because it uses data from the graph to effectively illustrate the text's claim about general economic policy uncertainty in the United Kingdom. The graph presents values for economic policy uncertainty in tax and public spending policy, trade policy, and general economic policy in the UK from 2005 to 2010. The graph shows that in 2005, the value for general economic policy uncertainty (approximately 90) was substantially lower than the value for uncertainty about trade policy specifically (approximately 160). It also shows that in 2010, the value for general economic policy uncertainty (approximately 120) was substantially higher than the value for uncertainty about trade policy (approximately 70). The substantial differences between these values in 2005 and 2010 support the claim that a general measure may not fully reflect uncertainty about specific areas of policy.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Hard"
    }
  },
  {
    questionId: "90856dbc",
    externalId: "90856dbc",
    section: "Reading and Writing",
    prompt: "<p>\"Lines Written in Early Spring\" is a 1798 poem by William Wordsworth. In the poem, the speaker describes having contradictory feelings while experiencing the sights and sounds of a spring day: ______</p><p>Which quotation from \"Lines Written in Early Spring\" most effectively illustrates the claim?</p>",
    answer: {
      choices: {
        A: { body: "<p>\"Through primrose-tufts, in that sweet bower, / The periwinkle trail'd its wreathes; / And 'tis my faith that every flower / Enjoys the air it breathes.\"</p>" },
        B: { body: "<p>\"The budding twigs spread out their fan, / To catch the breezy air; / And I must think, do all I can, / That there was pleasure there.\"</p>" },
        C: { body: "<p>\"The birds around me hopp'd and play'd: / Their thoughts I cannot measure, / But the least motion which they made, / It seem'd a thrill of pleasure.\"</p>" },
        D: { body: "<p>\"I heard a thousand blended notes, / While in a grove I [sat] reclined, / In that sweet mood when pleasant thoughts / Bring sad thoughts to the mind.\"</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is the best answer because it most effectively illustrates the claim that the speaker has contradictory feelings while experiencing the sights and sounds of spring. This quotation indicates that the speaker is reclined in a grove listening to a thousand sounds. Even though the speaker is in a \"sweet mood\" and thinking \"pleasant thoughts,\" those pleasant thoughts also bring to mind \"sad thoughts.\" In other words, these lines illustrate the claim that the speaker is having contradictory thoughts while immersed in the sights and sounds of spring.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Medium"
    }
  },
  {
    questionId: "119c4069",
    externalId: "119c4069",
    section: "Reading and Writing",
    prompt: "<p>\"Looking Back on Girlhood\" is an 1892 short story by Sarah Orne Jewett. In the story, the narrator explains that she prefers her hometown to other places she has visited: ______</p><p>Which quotation from \"Looking Back on Girlhood\" most effectively illustrates this claim?</p>",
    answer: {
      choices: {
        A: { body: "<p>\"There is always something fresh, something to be traced or discovered, something particularly to be remembered.\"</p>" },
        B: { body: "<p>\"Two large rivers join just below the village at the head of tide-water, and these, with the great inflow from the sea, make a magnificent stream, bordered by lovely green fields that slope gently to long lines of willows at the water's edge.\"</p>" },
        C: { body: "<p>\"I have had a good deal of journeying in my life, and taken great delight in it, but I have never taken greater delight than in my rides and drives and tramps and voyages within the borders of my native town.\"</p>" },
        D: { body: "<p>\"There is never-ending pleasure in making one's self familiar with such a region.\"</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is the best answer because it most effectively illustrates the claim that the narrator prefers her hometown to other places she has visited. In the quotation, the narrator compares how she feels about places she has traveled to how she feels about the town she's from. The narrator states that although the many journeys she has made in her lifetime have brought her much pleasure, she has gained the most enjoyment from her experiences inside the borders of her hometown.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Medium"
    }
  },
  {
    questionId: "15c0ed26",
    externalId: "15c0ed26",
    section: "Reading and Writing",
    prompt: "<p>The Hubble Space Telescope (HST) is projected to maintain operation until at least 2030, but it has already revolutionized high-resolution imaging of solar-system bodies in visible and ultraviolet (UV) light wavelengths, notwithstanding that only about 6% of the bodies imaged by the HST are within the solar system. NASA researcher Cindy L. Young and colleagues assert that a new space telescope dedicated exclusively to solar-system observations would permit an extensive survey of minor solar-system bodies and long-term UV observation to discern how solar-system bodies change over time. Young and colleagues' recommendation therefore implies that the HST ______</p><p>Which choice most logically completes the text?</p>",
    answer: {
      choices: {
        A: { body: "<p>will likely continue to be used primarily to observe objects outside the solar system.</p>" },
        B: { body: "<p>will no longer be used to observe solar system objects if the telescope recommended by Young and colleagues is deployed.</p>" },
        C: { body: "<p>can be modified to observe the features of solar system objects that are of interest to Young and colleagues.</p>" },
        D: { body: "<p>lacks the sensors to observe the wavelengths of light needed to discern how solar system bodies change over time.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer. The HST will operate until at least 2030, but it's only observing stuff inside our solar system 6% of the time. If we could get a different telescope to observe stuff inside our solar system 100% of the time and take more extensive images of certain things, then the HST could continue to be used mainly for observing stuff outside the solar system.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Inferences",
      difficulty: "Hard"
    }
  },
  {
    questionId: "d7b39ff4",
    externalId: "d7b39ff4",
    section: "Reading and Writing",
    prompt: "<p>The following text is adapted from Sylvia Acevedo's 2018 memoir <em>Path to the Stars: My Journey from Girl Scout to Rocket Scientist</em>. The narrator is traveling by car with her family to Mexico City. Mario and Laura are her brother and sister.</p><p>Mario and I played games to see how many different license plates we could spot, and Laura liked to look for children in the back seats of the cars we passed. We were used to the forty-five-minute drive to El Paso and familiar with the six-hour ride to Chihuahua, but I wondered what the long journey to Mexico City would be like.</p><p>According to the text, what did the narrator and Mario do while riding in the car?</p>",
    answer: {
      choices: {
        A: { body: "<p>They read books.</p>" },
        B: { body: "<p>They sang songs.</p>" },
        C: { body: "<p>They went to sleep.</p>" },
        D: { body: "<p>They played games.</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is the best answer because it most accurately describes what the narrator and Mario did while riding in the car. The text describes a car trip that the narrator is taking with her family. The text states that during the car ride, the narrator and Mario \"played games\" to see how many different license plates they could spot.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Central Ideas and Details",
      difficulty: "Easy"
    }
  },
  {
    questionId: "d2b5e069",
    externalId: "d2b5e069",
    section: "Reading and Writing",
    prompt: "<p>Psychologists Dacher Keltner and Jonathan Haidt have argued that experiencing awe—a sensation of reverence and wonder typically brought on by perceiving something grand or powerful—can enable us to feel more connected to others and thereby inspire us to act more altruistically. Keltner, along with Paul K. Piff, Pia Dietze, and colleagues, claims to have found evidence for this effect in a recent study where participants were asked to either gaze up at exceptionally tall trees in a nearby grove (reported to be a universally awe-inspiring experience) or stare at the exterior of a nearby, nondescript building. After one minute, an experimenter deliberately spilled a box of pens nearby.</p><p>Which finding from the researchers' study, if true, would most strongly support their claim?</p>",
    answer: {
      choices: {
        A: { body: "<p>Participants who had been looking at the trees helped the experimenter pick up significantly more pens than did participants who had been looking at the building.</p>" },
        B: { body: "<p>Participants who helped the experimenter pick up the pens used a greater number of positive words to describe the trees and the building in a postexperiment survey than did participants who did not help the experimenter.</p>" },
        C: { body: "<p>Participants who did not help the experimenter pick up the pens were significantly more likely to report having experienced a feeling of awe, regardless of whether they looked at the building or the trees.</p>" },
        D: { body: "<p>Participants who had been looking at the building were significantly more likely to notice that the experimenter had dropped the pens than were participants who had been looking at the trees.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer because it presents a finding that, if true, would most strongly support the researchers' claim that they found evidence that experiencing awe can make people feel more connected to others and thus more likely to behave altruistically (with beneficial and unselfish concern for others). According to the text, the researchers tested for this effect by first having participants look at either something known to be awe-inspiring (very tall trees) or something ordinary (a plain building) and then purposely spilling pens near the participants. The finding that participants who had looked at the trees helped pick up significantly more pens than did participants who had looked at the building would support the researchers' claim by demonstrating that the people who had experienced awe behaved more altruistically when the experimenter needed help than the other participants did.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Hard"
    }
  },
  {
    questionId: "ae51efb8",
    externalId: "ae51efb8",
    section: "Reading and Writing",
    prompt: "<p><em>The Post Office</em> is a 1912 play by Rabindranath Tagore, originally written in Bengali. The character Amal is a young boy who imagines that the people he sees passing the window of his home are carefree even when engaged in work or chores, as is evident when he says to the daughter of a flower seller, ______</p><p>Which quotation from <em>The Post Office</em> most effectively illustrates the claim?</p>",
    answer: {
      choices: {
        A: { body: "<p>\"I see, you don't wish to stop; I don't care to stay on here either.\"</p>" },
        B: { body: "<p>\"Oh, flower gathering? That is why your feet seem so glad and your anklets jingle so merrily as you walk.\"</p>" },
        C: { body: "<p>\"I'll pay when I grow up—before I leave to look for work out on the other side of that stream there.\"</p>" },
        D: { body: "<p>\"Wish I could be out too. Then I would pick some flowers for you from the very topmost branches right out of sight.\"</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is the best answer because it most effectively illustrates the claim that Amal imagines the people he sees are carefree even when engaged in work. In the quotation, Amal observes that the flower seller's daughter is \"flower gathering,\" or working, as the text indicates. Moreover, Amal notes that the daughter's feet \"seem so glad\" and her \"anklets jingle so merrily,\" suggesting that Amal believes that the flower seller's daughter is cheerful.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Medium"
    }
  },
  {
    questionId: "3009048e",
    externalId: "3009048e",
    section: "Reading and Writing",
    prompt: "<p>To monitor changes to glaciers in Switzerland, the government periodically measures them for features like total area of ice and mean ice thickness, which are then reported in the Swiss Glacier Inventory. These measurements can be used to compare the glaciers. For example, the Gorner glacier had ______</p><p>Which choice most effectively uses data from the graph to complete the example?</p>",
    answer: {
      choices: {
        A: { body: "<p>a larger area than either the Fiescher glacier or the Unteraar glacier.</p>" },
        B: { body: "<p>a smaller area than the Fiescher glacier but a larger area than the Unteraar glacier.</p>" },
        C: { body: "<p>a smaller area than either the Fiescher glacier or the Unteraar glacier.</p>" },
        D: { body: "<p>a larger area than the Fiescher glacier but a smaller area than the Unteraar glacier.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer. The claim is that measurements such as total area can be used to compare glaciers. The graph shows us the area measurements for three glaciers. Of those, Gorner has the largest area.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Easy"
    }
  },
  {
    questionId: "92b43ac5",
    externalId: "92b43ac5",
    section: "Reading and Writing",
    prompt: "<p>In tomato plants, herbivory induces defensive production of jasmonic acid, while microbial infection induces defensive production of salicylic acid; plants also emit airborne chemicals to initiate the appropriate defense in nearby tomato plants. Researchers investigated the poor resistance tomato plants show to whitefly herbivory by exposing some plants to airborne chemicals from whitefly-free plants and others to airborne chemicals from whitefly-infested plants, then infesting both groups of plants with whiteflies. The researchers concluded that whiteflies induce tomato plants to emit chemicals that cause other tomato plants to preferentially defend against microbial infection even when under herbivorous attack.</p><p>Which choice best describes data from the graph that support the researchers' conclusion?</p>",
    answer: {
      choices: {
        A: { body: "<p>When plants exposed to air from whitefly-free plants were infested, they produced more jasmonic acid than did control plants, whereas when plants exposed to air from whitefly-infested plants were infested, they produced less jasmonic acid and more salicylic acid than did control plants.</p>" },
        B: { body: "<p>When plants exposed to air from whitefly-infested plants were infested, they produced less jasmonic acid than salicylic acid, whereas when plants exposed to air from whitefly-free plants were infested, they produced about the same amount of jasmonic acid and salicylic acid.</p>" },
        C: { body: "<p>When plants exposed to air from whitefly-free plants were infested, they produced both jasmonic acid and salicylic acid, whereas when plants exposed to air from whitefly-infested plants were infested, they exclusively produced salicylic acid.</p>" },
        D: { body: "<p>When plants exposed to air from whitefly-infested plants were infested, they produced less jasmonic acid than did control plants, whereas when plants exposed to air from whitefly-free plants were infested, they produced more jasmonic acid and salicylic acid than did control plants.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer because it best describes data from the graph that support the researchers' conclusion about whitefly-induced defenses in tomato plants. According to the text, tomato plants produce airborne chemicals that prompt nearby tomato plants to increase their production of appropriate defensive chemicals, such as jasmonic acid in response to herbivory and salicylic acid in response to microbial infection. The graph shows that control tomato plants produced about 140 nanograms of jasmonic acid per gram of dry weight and about 120 nanograms of salicylic acid per gram of dry weight, which indicates the baseline levels. Plants exposed to air from whitefly-free plants produced about 205 nanograms of jasmonic acid per gram of dry weight when subsequently infested by whiteflies, which is more than the amount produced by the control plants. Plants exposed to air from whitefly-infested plants and then subsequently infested by whiteflies produced approximately 100 nanograms of jasmonic acid per gram of dry weight (which is less than control plants did) and approximately 175 nanograms of salicylic acid per gram of dry weight (which is more than control plants did). This supports the researchers' conclusion that whiteflies cause tomato plants to emit airborne chemical signals that induce nearby plants to preferentially defend against microbes even when experiencing herbivory from whiteflies.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Hard"
    }
  },
  {
    questionId: "4aa75b60",
    externalId: "4aa75b60",
    section: "Reading and Writing",
    prompt: "<p>A student is using the table as part of a social studies class presentation on the US auto industry in the early twentieth century. The student notes that, according to the table, from 1910 to 1925 ______</p><p>Which choice most effectively uses data from the table to complete the statement?</p>",
    answer: {
      choices: {
        A: { body: "<p>the number of cars produced increased but the number of companies producing cars decreased.</p>" },
        B: { body: "<p>both the number of cars produced and the number of companies producing cars remained unchanged.</p>" },
        C: { body: "<p>the number of cars produced decreased but the number of companies producing cars remained unchanged.</p>" },
        D: { body: "<p>both the number of cars produced and the number of companies producing cars increased.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer because it most effectively uses data from the table to complete the statement about the US auto industry in the early twentieth century. The table shows the number of cars produced annually and number of companies producing cars in the United States between 1910 and 1925 in increments of five years. According to the table, the number of cars produced consistently increased from one increment to the next, going from 123,990 cars in 1910 to 3,185,881 cars in 1925. At the same time, the table shows that the number of companies producing cars consistently decreased, going from 320 companies in 1910 to only 80 companies in 1925. Thus, the table shows that the number of cars produced increased from 1910 to 1925, even as the number of companies producing cars decreased.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Easy"
    }
  },
  {
    questionId: "da9ad052",
    externalId: "da9ad052",
    section: "Reading and Writing",
    prompt: "<p>A student is researching the number of visits each year to two museums, the National Museum of the American Indian and the National Museum of African American History and Culture. Of the four years included in the table, the year when both museums had the highest number of visits was ______</p><p>Which choice most effectively uses data from the table to complete the statement?</p>",
    answer: {
      choices: {
        A: { body: "<p>2016.</p>" },
        B: { body: "<p>2018.</p>" },
        C: { body: "<p>2019.</p>" },
        D: { body: "<p>2017.</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is the best answer because it most effectively uses data from the table to complete the statement about the year when both museums had the highest number of visits. The table shows the number of visits (in millions) from 2016 to 2019 to two museums: the National Museum of the American Indian and the National Museum of African American History and Culture. It indicates that the highest number of visits to the National Museum of the American Indian was 1.2 million in 2017 and that the highest number of visits to the National Museum of African American History and Culture was 2.4 million, also in 2017.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Easy"
    }
  },
  {
    questionId: "7e1dd168",
    externalId: "7e1dd168",
    section: "Reading and Writing",
    prompt: "<p>Neural networks are computer models intended to reflect the organization of human brains and are often used in studies of brain function. According to an analysis of 11,000 such networks, Rylan Schaeffer and colleagues advise caution when drawing conclusions about brains from observations of neural networks. They found that when attempting to mimic grid cells (brain cells used in navigation), while 90% of the networks could accomplish navigation-related tasks, only about 10% of those exhibited any behaviors similar to those of grid cells. But even this approximation of grid-cell activity has less to do with similarity between the neural networks and biological brains than it does with the rules programmed into the networks.</p><p>Which finding, if true, would most directly support the claim in the underlined sentence?</p>",
    answer: {
      choices: {
        A: { body: "<p>The rules that allow for networks to exhibit behaviors like those of grid cells have no equivalent in the function of biological brains.</p>" },
        B: { body: "<p>The networks that do not exhibit behaviors like those of grid cells were nonetheless programmed with rules that had proven useful in earlier neural-network studies.</p>" },
        C: { body: "<p>Neural networks can often accomplish tasks that biological brains do, but they are typically programmed with rules to model multiple types of brain cells simultaneously.</p>" },
        D: { body: "<p>Once a neural network is programmed, it is trained on certain tasks to see if it can independently arrive at processes that are similar to those performed by biological brains.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer. While many networks can perform navigation tasks, or even mimic grid cells, it doesn't mean they're actually behaving like biological brains—this finding suggests that the rules that govern neural network behavior are completely unlike the way real brains work.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Hard"
    }
  },
  {
    questionId: "6264a75d",
    externalId: "6264a75d",
    section: "Reading and Writing",
    prompt: "<p>Over 600 languages are spoken in New York City in addition to English—one can find Amharic spoken in the neighborhood of Norwood, or Ilocano in Woodside. Most speakers of Chinese languages reside in the neighborhood of Flushing (part of New York City's borough of Queens) and in Chinatown, in the borough of Manhattan. New immigrants from north China, where Mandarin is the primary first language, tend to settle in Queens, while new immigrants from south China, where many people speak Cantonese or Fuzhounese as a first language, tend to settle in Manhattan. It can therefore be inferred that ______</p><p>Which choice most logically completes the text?</p>",
    answer: {
      choices: {
        A: { body: "<p>languages tend to change more rapidly in areas where many languages are spoken than in areas where few languages are spoken.</p>" },
        B: { body: "<p>languages spoken by immigrant peoples can differ significantly in vocabulary and pronunciation from those same languages in their country of origin.</p>" },
        C: { body: "<p>there is a positive correlation between the physical size of a country and the number of languages spoken in that country.</p>" },
        D: { body: "<p>correlations in a country between languages and regions where they are spoken can replicate themselves in a new country to which the original country's citizens emigrate.</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is the best answer because it logically completes the text's discussion of patterns of linguistic distribution in New York City. The text explains how Chinese immigrants in New York City tend to settle in different boroughs based on their region of origin in China: those from north China (Mandarin speakers) typically settle in Queens, while those from south China (Cantonese or Fuzhounese speakers) typically settle in Manhattan. This pattern demonstrates that the regional language distribution in China (north versus south) has reproduced itself in New York City (Queens versus Manhattan). Therefore, it can be reasonably inferred that correlations between languages and regions in one country can replicate themselves when citizens of that country emigrate to a new country.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Inferences",
      difficulty: "Medium"
    }
  },
  {
    questionId: "0a017199",
    externalId: "0a017199",
    section: "Reading and Writing",
    prompt: "<p>Some animal-behavior studies involve observing wild animals in their natural habitat, and some involve capturing wild animals and observing them in a laboratory. Each approach has advantages over the other. In wild studies, researchers can more easily presume that the animals are behaving normally, and in lab studies, researchers can more easily control factors that might affect the results. But if, for example, the results from a wild study and a lab study of Western scrub-jays (<em>Aphelocoma californica</em>) contradict each other, one or both of the studies must have failed to account for some factor that was relevant to the birds' behavior.</p><p>Which choice best states the main idea of the text?</p>",
    answer: {
      choices: {
        A: { body: "<p>When the results of a natural-habitat study and those from a lab study of a wild animal such as the Western scrub-jay conflict, the study in the natural habitat is more likely than the lab study to have accurate results.</p>" },
        B: { body: "<p>Studying wild animals such as the Western scrub-jay in both their natural habitat and lab settings is likely to yield conflicting results that researchers cannot fully resolve.</p>" },
        C: { body: "<p>Wild animals such as the Western scrub-jay can be effectively studied in their natural habitat and in the lab, but each approach has drawbacks that could affect the accuracy of the findings.</p>" },
        D: { body: "<p>Differing results between natural-habitat and lab studies of wild animals such as the Western scrub-jay are a strong indication that both of the studies had design flaws that affected the accuracy of their results.</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is the best answer because it most accurately states the main idea of the text. The text begins by explaining that wild animals can be studied in their natural habitat or in a laboratory setting, with each setting offering unique advantages to researchers. The text then highlights an instance in which Western scrub-jays were studied in both settings but with conflicting results, indicating that one or both studies may have failed to account for the disadvantages of its research setting. Thus, the main idea of the text is that while wild animals can be effectively studied in natural or lab settings, there are drawbacks to each that need to be considered to ensure accurate results.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Central Ideas and Details",
      difficulty: "Hard"
    }
  },
  {
    questionId: "87f45e64",
    externalId: "87f45e64",
    section: "Reading and Writing",
    prompt: "<p>Arthropods—brine shrimp, hawk moths, and many other invertebrate animals—have a nervous system made up of a brain, nerve cord, and other nerves. Researchers have gained insights about this system in ancient arthropods from traces found in various fossils. For example, in a study of two fossils of the extinct arthropod species <em>Mollisonia symmetrica</em>, Javier Ortega-Hernández, James Weaver, and team observed clear signs of a nerve cord. They also saw possible indications of a synganglion, a brain-like mass of nerves. Researchers hope to identify more features of the nervous systems of prehistoric arthropods as additional fossils are found.</p><p>Which choice best states the main idea of the text?</p>",
    answer: {
      choices: {
        A: { body: "<p>There are several similarities between the brains of hawk moths and the brains of brine shrimp.</p>" },
        B: { body: "<p>Fossil evidence can contribute to the understanding of the nervous system in ancient arthropods.</p>" },
        C: { body: "<p>Newly discovered fossils suggest that ancient hawk moths and ancient brine shrimp had spines.</p>" },
        D: { body: "<p>Researchers need to focus on finding more fossils of ancient arthropods.</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is the best answer because it most accurately states the main idea of the text. The text states that researchers have used fossils to learn about the nervous systems of ancient arthropods. It then provides a specific example of researchers studying fossils of Mollisonia symmetrica and finding evidence of a nerve cord and possibly a synganglion (a brain-like mass of nerves). The text concludes by noting that researchers hope to discover more features of prehistoric arthropods' nervous systems \"as additional fossils are found.\" Thus, the main idea of the text is that fossil evidence can contribute to the understanding of the nervous system in ancient arthropods.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Central Ideas and Details",
      difficulty: "Easy"
    }
  },
  {
    questionId: "4d671b68",
    externalId: "4d671b68",
    section: "Reading and Writing",
    prompt: "<p>Algae living within the tissues of corals play a critical role in keeping corals, and the marine ecosystems they are part of, thriving. Some coral species appear brown in color when healthy due to the algae colonies living in their tissues. In the event of an environmental stressor, the algae can die or be expelled, causing the corals to appear white. To recover the algae, the bleached corals then begin to produce bright colors, which block intense sunlight, encouraging the light-sensitive algae to recolonize the corals.</p><p>What does the text most strongly suggest about corals that produce bright colors?</p>",
    answer: {
      choices: {
        A: { body: "<p>These corals have likely been subjected to stressful environmental conditions.</p>" },
        B: { body: "<p>These corals are likely more vulnerable to exposure from intense sunlight than white corals are.</p>" },
        C: { body: "<p>These corals have likely recovered from an environmental event without the assistance of algae colonies.</p>" },
        D: { body: "<p>These corals are more likely to survive without algae colonies than brown corals are.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer. The text says that corals produce bright colors to block sunlight and encourage algae to recolonize after \"an environmental stressor.\" From this, we can infer that corals that produce bright colors have probably been subjected to an environmental stressor.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Central Ideas and Details",
      difficulty: "Hard"
    }
  },
  {
    questionId: "a0f3b38c",
    externalId: "a0f3b38c",
    section: "Reading and Writing",
    prompt: "<p>Scientists have long believed that giraffes are mostly silent and communicate only visually with one another. But biologist Angela Stöger and her team analyzed hundreds of hours of recordings of giraffes in three European zoos and found that giraffes make a very low-pitched humming sound. The researchers claim that the giraffes use these sounds to communicate when it's not possible for them to signal one another visually.</p><p>Which finding, if true, would most directly support Stöger and her team's claim?</p>",
    answer: {
      choices: {
        A: { body: "<p>Giraffes have an excellent sense of vision and can see in color.</p>" },
        B: { body: "<p>The giraffes only produced the humming sounds at night when they couldn't see one another.</p>" },
        C: { body: "<p>Wild giraffes have never been recorded making humming sounds.</p>" },
        D: { body: "<p>Researchers observed other animals in European zoos humming.</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is the best answer because it presents a finding that, if true, would support Stöger and her team's claim that giraffes use humming to communicate when they cannot signal to one another visually. The text indicates that scientists have long thought that giraffes produce little sound and exclusively rely on visual signals to communicate with one another. The text goes on to say, however, that Stöger and her team have recorded giraffes in three European zoos making a low-pitched humming sound, which the team claims the giraffes use to communicate when they cannot see each other. If the giraffes produced these sounds when visual communication was impossible and never produced them otherwise, that would support Stöger and her team's claim about the circumstance in which giraffes make the sound.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Easy"
    }
  },
  {
    questionId: "206ecbfd",
    externalId: "206ecbfd",
    section: "Reading and Writing",
    prompt: "<p>Plants like potatoes, tomatoes, and soybeans are susceptible to bacterial wilt disease caused by the bacteria <em>Ralstonia solanacearum</em>. A multinational team of scientists led by Zhong Wei studied whether other microbes in the soil might influence the degree to which plants are affected by the disease. The team sampled soil surrounding individual tomato plants over time and compared the results of plants that became diseased with those that remained healthy. They concluded that the presence of certain microbes in the soil might explain the difference between healthy and diseased plants.</p><p>Which finding, if true, would most directly support the team's conclusion?</p>",
    answer: {
      choices: {
        A: { body: "<p>The soil surrounding healthy plants contained significantly higher concentrations of microbes known to inhibit <em>Ralstonia solanacearum</em> than the soil surrounding diseased plants did.</p>" },
        B: { body: "<p>The soil surrounding the plants contained high concentrations of <em>Ralstonia solanacearum</em> regardless of whether the plants were affected by wilt disease.</p>" },
        C: { body: "<p>The soil surrounding healthy plants tended to have significantly higher moisture levels than the soil surrounding diseased plants did.</p>" },
        D: { body: "<p>By the end of the experiment, over half the plants had been affected by wilt disease regardless of differences in the types and concentrations of microbes in the surrounding soil.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer. This choice provides evidence that directly links the presence of <em>R. solanacearum</em>-inhibiting microbes in the soil to the health of tomato plants.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Medium"
    }
  },
  {
    questionId: "bf1fe112",
    externalId: "bf1fe112",
    section: "Reading and Writing",
    prompt: "<p>Researchers hypothesized that a decline in the population of dusky sharks near the mid-Atlantic coast of North America led to a decline in the population of eastern oysters in the region. Dusky sharks do not typically consume eastern oysters but do consume cownose rays, which are the main predators of the oysters.</p><p>Which finding, if true, would most directly support the researchers' hypothesis?</p>",
    answer: {
      choices: {
        A: { body: "<p>Declines in the regional abundance of dusky sharks' prey other than cownose rays are associated with regional declines in dusky shark abundance.</p>" },
        B: { body: "<p>Eastern oyster abundance tends to be greater in areas with both dusky sharks and cownose rays than in areas with only dusky sharks.</p>" },
        C: { body: "<p>Consumption of eastern oysters by cownose rays in the region substantially increased before the regional decline in dusky shark abundance began.</p>" },
        D: { body: "<p>Cownose rays have increased in regional abundance as dusky sharks have decreased in regional abundance.</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is the best answer because it presents a finding that, if true, would most directly support the researchers' hypothesis about the connection between the dusky shark population decline and the eastern oyster population decline. The text indicates that although dusky sharks don't usually eat eastern oysters, they do consume cownose rays, which are the main predators of eastern oysters. An increase in the abundance of cownose rays in the region in response to a decline in the abundance of dusky sharks would directly support the researchers' hypothesis: a higher number of cownose rays would consume more eastern oysters, driving down the oyster population.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Hard"
    }
  },
  {
    questionId: "7f8cec1c",
    externalId: "7f8cec1c",
    section: "Reading and Writing",
    prompt: "<p>Early Earth is thought to have been characterized by a stagnant lid tectonic regime, in which the upper lithosphere (the outer rocky layer) was essentially immobile and there was no interaction between the lithosphere and the underlying mantle. Researchers investigated the timing of the transition from a stagnant lid regime to a tectonic plate regime, in which the lithosphere is fractured into dynamic plates that in turn allow lithospheric and mantle material to mix. Examining chemical data from lithospheric and mantle-derived rocks ranging from 285 million to 3.8 billion years old, the researchers dated the transition to 3.2 billion years ago.</p><p>Which finding, if true, would most directly support the researchers' conclusion?</p>",
    answer: {
      choices: {
        A: { body: "<p>Among rocks known to be older than 3.2 billion years, significantly more are mantle derived than lithospheric, but the opposite is true for the rocks younger than 3.2 billion years.</p>" },
        B: { body: "<p>Mantle-derived rocks older than 3.2 billion years show significantly more compositional diversity than lithospheric rocks older than 3.2 billion years do.</p>" },
        C: { body: "<p>There is a positive correlation between the age of lithospheric rocks and their chemical similarity to mantle-derived rocks, and that correlation increases significantly in strength at around 3.2 billion years old.</p>" },
        D: { body: "<p>Mantle-derived rocks younger than 3.2 billion years contain some material that is not found in older mantle-derived rocks but is found in older and contemporaneous lithospheric rocks.</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is the best answer because it presents a finding that, if true, would most directly support the researchers' conclusion that the transition from a stagnant lid regime to a tectonic plate regime occurred around 3.2 billion years ago. The text explains that early in Earth's history, Earth exhibited a stagnant lid regime in which there's no interaction between the lithosphere and the underlying mantle. The text further explains that, by contrast, once Earth began to exhibit a tectonic plate regime, its lithospheric and mantle material began to mix. If mantle-derived rocks younger than 3.2 billion years contain material not found in older mantle-derived rocks, that material must have originated somewhere other than the mantle. And if this material is found in both older and contemporaneous lithospheric rocks, that would imply that the lithosphere was able to mix with mantle material beginning around 3.2 billion years ago, as the researchers concluded.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Hard"
    }
  },
  {
    questionId: "7b249420",
    externalId: "7b249420",
    section: "Reading and Writing",
    prompt: "<p>Biologist Natacha Bodenhausen and colleagues analyzed the naturally occurring bacterial communities associated with leaves and roots of wild <em>Arabidopsis thaliana</em>, a small flowering plant. The researchers found many of the same bacterial genera in both the plants' leaves and roots. To explain this, the researchers pointed to the general proximity of <em>A. thaliana</em> leaves to the ground and noted that rain splashing off soil could bring soil-based bacteria into contact with the leaves. Alternatively, the researchers noted that wind, which may be a source of bacteria in the aboveground portion of plants, could also bring bacteria to the soil and roots. Either explanation suggests that ______</p><p>Which choice most logically completes the text?</p>",
    answer: {
      choices: {
        A: { body: "<p>bacteria carried by wind are typically less beneficial to <em>A. thaliana</em> than soil-based bacteria are.</p>" },
        B: { body: "<p>some bacteria in <em>A. thaliana</em> leaves and roots may share a common source.</p>" },
        C: { body: "<p>many bacteria in <em>A. thaliana</em> leaves may have been deposited by means other than rain.</p>" },
        D: { body: "<p><em>A. thaliana</em> leaves and roots are especially vulnerable to harmful bacteria.</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is the best answer. Both explanations suggest that the bacteria come from the same place: either they come from the ground and make their way to the leaves, or they come from above the ground and make their way to the roots.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Inferences",
      difficulty: "Medium"
    }
  },
  {
    questionId: "14ea5897",
    externalId: "14ea5897",
    section: "Reading and Writing",
    prompt: "<p>Icebergs generally appear to be mostly white or blue, depending on how the ice reflects sunlight. Ice with air bubbles trapped in it looks white because much of the light reflects off the bubbles. Ice without air bubbles usually looks blue because the light travels deep into the ice and only a little of it is reflected. However, some icebergs in the sea around Antarctica appear to be green. One team of scientists hypothesized that this phenomenon is the result of yellow-tinted dissolved organic carbon in Antarctic waters mixing with blue ice to produce the color green.</p><p>Which finding, if true, would most directly weaken the team's hypothesis?</p>",
    answer: {
      choices: {
        A: { body: "<p>White ice doesn't change color when mixed with dissolved organic carbon due to the air bubbles in the ice.</p>" },
        B: { body: "<p>Dissolved organic carbon has a stronger yellow color in Antarctic waters than it does in other places.</p>" },
        C: { body: "<p>Blue icebergs and green icebergs are rarely found near each other.</p>" },
        D: { body: "<p>Blue icebergs and green icebergs contain similarly small traces of dissolved organic carbon.</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is the best answer because it presents a finding that, if true, would weaken the scientists' hypothesis about icebergs that appear to be green. The text indicates that most icebergs are either mostly white or blue in color but that some icebergs in Antarctica appear to be green. The text goes on to say that the scientists hypothesized that this green color occurs when yellow-tinted dissolved organic carbon in ocean waters mixes with blue ice. A finding that both blue icebergs and green icebergs contain similarly small traces of dissolved organic carbon would suggest that something other than yellow-tinted organic carbon causes some icebergs' green color, since the blue icebergs that contain yellow-tinted organic carbon remained blue instead of turning green.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Hard"
    }
  },
  {
    questionId: "25f5e913",
    externalId: "25f5e913",
    section: "Reading and Writing",
    prompt: "<p>It is common for freshwater lakes near or above a latitude of 45° north of the equator, like Lake Mjøsa in Norway, to accumulate surface ice in winter. The amount and duration of ice depends on many factors, including local weather conditions as well as the lake's depth, volume, and surface area, but a climate researcher claims that some lakes in these latitudes have seen a decline in the duration of ice between the early 1980s and the mid-2000s. She cites as a typical example ______</p><p>Which choice most effectively uses data from the graph to complete the researcher's example?</p>",
    answer: {
      choices: {
        A: { body: "<p>both Lake Neusiedl and Oulujärvi, which had fewer than 195 days of ice in the winter of 1980–81.</p>" },
        B: { body: "<p>Lake Neusiedl, which had more days of ice in the winter of 2005–06 than it did in the winter of 1980–81.</p>" },
        C: { body: "<p>Oulujärvi, which had fewer days of ice in the winter of 2005–06 than it did in the winter of 1980–81.</p>" },
        D: { body: "<p>both Lake Neusiedl and Oulujärvi, which had more than 105 days of ice in the winter of 2005–06.</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is the best answer because it most effectively uses data from the graph to exemplify the researcher's claim—namely, that the duration of ice on some lakes has declined between the early 1980s and the mid-2000s. According to the graph, Oulujärvi had surface ice for nearly 200 days in the winter of 1980–81 but only about 160 days of ice in the more recent winter of 2005–06, evidence of a clear decline in the duration of surface ice between these time periods.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Medium"
    }
  },
  {
    questionId: "98caa09d",
    externalId: "98caa09d",
    section: "Reading and Writing",
    prompt: "<p>By the early 1900s, the Singer Corporation, a US sewing machine manufacturer founded in 1851, began to see rapidly increasing sales abroad, particularly in Russia, Germany, and the United Kingdom. These markets were responsible for the bulk of Singer's overseas sales, but demand for the company's machines in other countries also grew significantly in the early twentieth century. For instance, sales of their sewing machines in ______</p><p>Which choice most effectively uses data from the graph to complete the example?</p>",
    answer: {
      choices: {
        A: { body: "<p>the Philippines increased dramatically from 1908 to 1918.</p>" },
        B: { body: "<p>New Zealand were largely consistent from 1903 to 1918.</p>" },
        C: { body: "<p>Australia increased steadily from 1903 to 1918.</p>" },
        D: { body: "<p>Turkey declined substantially from 1913 to 1918.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer because it most effectively uses data from the graph to complete the example. According to the graph, fewer than 10,000 sewing machines were sold in the Philippines in both 1903 and 1908, but nearly 30,000 were sold in 1913 and around 45,000 were sold in 1918. This increase illustrates the statement in the text that demand for Singer sewing machines grew significantly in the early twentieth century in overseas countries other than Russia, Germany, and the United Kingdom.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Easy"
    }
  },
  {
    questionId: "ff953239",
    externalId: "ff953239",
    section: "Reading and Writing",
    prompt: "<p>The recovery of a 1,000-year-old Chinese shipwreck in the Java Sea near present-day Indonesia has yielded a treasure trove of artifacts, including thousands of small ceramic bowls. Using a portable X-ray fluorescence analyzer tool, Lisa Niziolek and her team were able to detect the chemical composition of these bowls without damaging them. By comparing the chemical signatures of the bowls with those of the materials still at old Chinese kiln sites, Niziolek and her team can pinpoint which Chinese kilns likely produced the ceramic bowls.</p><p>Which choice best states the main idea of the text?</p>",
    answer: {
      choices: {
        A: { body: "<p>Because of a new technology, researchers can locate and recover more shipwrecks than they could in the past.</p>" },
        B: { body: "<p>Researchers have been able to identify the location of a number of Chinese kilns in operation 1,000 years ago.</p>" },
        C: { body: "<p>With the help of a special tool, researchers have determined the likely origin of bowls recovered from a shipwreck.</p>" },
        D: { body: "<p>Before the invention of portable X-ray fluorescence, researchers needed to take a small piece out of an artifact to analyze its components.</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is the best answer because it most accurately states the main idea of the text. According to the text, thousands of ceramic bowls were found in a recovered Chinese shipwreck. The text goes on to say that Niziolek and her team used a special tool, a portable X-ray fluorescence analyzer, to determine the bowls' chemical signatures. Comparing these chemical signatures with the chemical signatures of materials they had collected from old Chinese kiln sites, the text says, allowed the researchers to identify which kilns had produced the bowls. In other words, the researchers determined the bowls' origin.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Central Ideas and Details",
      difficulty: "Medium"
    }
  },
  {
    questionId: "93a05d57",
    externalId: "93a05d57",
    section: "Reading and Writing",
    prompt: "<p>When the Vinland Map, a map of the world purported to date to the mid-1400s, surfaced in 1957, some scholars believed it demonstrated that European knowledge of the eastern coast of present-day North America predated Christopher Columbus's 1492 arrival. In 2021, a team including conservators Marie-France Lemay and Paula Zyats and materials scientist Anikó Bezur performed an extensive analysis of the map and the ink used. They found that the ink contains titanium dioxide, a compound that was first introduced in ink manufacturing in the early 1900s. Therefore, the team concluded that ______</p><p>Which choice most logically completes the text?</p>",
    answer: {
      choices: {
        A: { body: "<p>mid-1400s Europeans could not have known about the eastern coast of present-day North America.</p>" },
        B: { body: "<p>the Vinland Map could not have been drawn by mid-1400s mapmakers.</p>" },
        C: { body: "<p>mapmakers must have used titanium compounds in their ink in the 1400s.</p>" },
        D: { body: "<p>there isn't enough information to determine when the ink was created.</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is the best answer because it most logically completes the text's discussion of Lemay, Zyats, and Bezur's 2021 analysis of the Vinland Map. The text indicates that while some scholars have believed that the map was drawn in the mid-1400s, the 2021 analysis showed the presence of the compound titanium dioxide in the ink used to draw the map. The text goes on to say that titanium dioxide wasn't used to manufacture ink until the early 1900s, which means that ink containing this compound couldn't have been available to mapmakers in the 1400s. Since mapmakers in the mid-1400s couldn't have used ink with titanium dioxide, it follows that the Vinland Map couldn't have been drawn by mid-1400s mapmakers.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Inferences",
      difficulty: "Medium"
    }
  },
  {
    questionId: "0d564c7f",
    externalId: "0d564c7f",
    section: "Reading and Writing",
    prompt: "<p>A student in Hawaii is interested in pursuing a career in technology and decides to do some research on local trends. The student notices that the number of jobs in computer services in 2010 was ______</p><p>Which choice most effectively uses data from the graph to complete the statement?</p>",
    answer: {
      choices: {
        A: { body: "<p>higher than the number of jobs in technical consulting services, and in 2019 was about the same as the number of jobs in engineering services.</p>" },
        B: { body: "<p>about the same as the number of jobs in engineering services, and in 2019 was about the same as the number of jobs in technical consulting services.</p>" },
        C: { body: "<p>lower than the number of jobs in engineering services, but in 2019 was higher than the number of jobs in engineering services.</p>" },
        D: { body: "<p>about the same as the number of jobs in technical consulting services, but in 2019 was lower than the number of jobs in technical consulting services.</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is the best answer because it uses data from the graph to effectively complete the statement regarding what the student notices about the number of jobs in computer services in 2010. The graph shows that in 2010, the number of computer services jobs was approximately 6,000, which is the same approximate number of jobs in engineering services. Additionally, the graph shows that in 2019, the number of jobs in technical consulting services and the number of jobs in computer services were about the same, at approximately 5,000.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Medium"
    }
  },
  {
    questionId: "bda73a5a",
    externalId: "bda73a5a",
    section: "Reading and Writing",
    prompt: "<p>Archaeologists have discovered a runestone in Norway that may contain the earliest example of written words in Scandinavia. Carbon dating at the discovery site revealed that the stone was likely carved between 1 and 250 CE. Runologist Kristel Zilmer believes the stone will be helpful in learning more about the use of runic alphabets in early Iron Age Scandinavia.</p><p>Which choice best states the main topic of the text?</p>",
    answer: {
      choices: {
        A: { body: "<p>Battles of the Iron Age</p>" },
        B: { body: "<p>A runestone found in Norway</p>" },
        C: { body: "<p>A new method for dating rock samples</p>" },
        D: { body: "<p>The research interests of Kristel Zilmer</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is the best answer because it most accurately states the main topic of the text. The text begins by stating that archaeologists in Norway have discovered what may be the oldest known runestone (a stone with an inscription in the runic alphabets used in the region in ancient times). According to the text, the object was created between 1 and 250 CE. The text then mentions a researcher who comments on the runestone's significance to the study of runic alphabets. Thus, the main focus throughout the text is a runestone found in Norway.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Central Ideas and Details",
      difficulty: "Medium"
    }
  },
  {
    questionId: "533d6d0e",
    externalId: "533d6d0e",
    section: "Reading and Writing",
    prompt: "<p>To make her art more widely available, graphic artist Elizabeth Catlett turned to linocuts. In linocut printing, an artist carves an image into a sheet of linoleum to create a stamp that is used to mass-produce prints. In the linocut series <em>The Black Woman</em> (1946–1947), Catlett depicts the everyday experiences of Black women alongside the achievements of well-known Black women. This pairing invites the viewer to draw connections among the women. The linocut process enabled Catlett's work to reach a wide audience and supported her aim to unite Black women through her art.</p><p>According to the text, what is significant about Catlett's use of linocut printing?</p>",
    answer: {
      choices: {
        A: { body: "<p>Linocut printing involved using materials that were readily available to Catlett.</p>" },
        B: { body: "<p>Linocut printing helped Catlett use art to connect people, especially Black women.</p>" },
        C: { body: "<p>Catlett became commercially successful once she started using linocut printing.</p>" },
        D: { body: "<p>Catlett was one of the first Black artists to use linocut printing.</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is the best answer. The last sentence states that the linocut process \"supported her [Catlett's] aim to unite Black women through her art.\"</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Central Ideas and Details",
      difficulty: "Easy"
    }
  },
  {
    questionId: "5e6596a9",
    externalId: "5e6596a9",
    section: "Reading and Writing",
    prompt: "<p>Julianne I. Moses and colleagues have reported that Neptune may have cooled significantly between 2003 and 2020. The team reached this conclusion by analyzing existing infrared imaging and spectroscopy data about the planet obtained from various instruments in different years. Of the team's sources listed in the table, the earliest example of spectroscopy data included in the analysis was obtained in ______</p><p>Which choice most effectively uses data from the table to complete the text?</p>",
    answer: {
      choices: {
        A: { body: "<p>2007 using TEXES at the Gemini Observatory.</p>" },
        B: { body: "<p>2007 using T-ReCS at the Gemini Observatory.</p>" },
        C: { body: "<p>2006 using VISIR at the European Southern Observatory.</p>" },
        D: { body: "<p>2003 using LWS at the W.M. Keck Observatory.</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is the best answer because it effectively completes the text's discussion of Moses and colleagues' analysis of changes in Neptune's temperature by using data from the table to identify the source of the earliest example of spectroscopy data included in this analysis. The text indicates that Moses and colleagues analyzed infrared imaging and spectroscopy data about Neptune obtained in different years by various instruments. The table lists the observatories where these instruments are housed, the type of data each instrument collected (infrared imaging or spectroscopy), and the years in which the instruments' observations were made. According to the table, only two of these instruments obtained spectroscopy data: VISIR at the European Southern Observatory, which made its observations in 2006, and TEXES at the Gemini Observatory, which made its observations in later years (2007 and 2019). Although two other instruments are also included in the table, they obtained infrared imaging data, not spectroscopy data. Therefore, the earliest example of spectroscopy data included in the researchers' analysis is the data obtained by VISIR at the European Southern Observatory in 2006.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Hard"
    }
  },
  {
    questionId: "e55ded58",
    externalId: "e55ded58",
    section: "Reading and Writing",
    prompt: "<p>Black beans (<em>Phaseolus vulgaris</em>) are a nutritionally dense food, but they are difficult to digest in part because of their high levels of soluble fiber and compounds like raffinose. They also contain antinutrients like tannins and trypsin inhibitors, which interfere with the body's ability to extract nutrients from foods. In a research article, Marisela Granito and Glenda Álvarez from Simón Bolívar University in Venezuela claim that inducing fermentation of black beans using lactic acid bacteria improves the digestibility of the beans and makes them more nutritious.</p><p>Which finding from Granito and Álvarez's research, if true, would most directly support their claim?</p>",
    answer: {
      choices: {
        A: { body: "<p>When cooked, fermented beans contained significantly more trypsin inhibitors and tannins but significantly less soluble fiber and raffinose than nonfermented beans.</p>" },
        B: { body: "<p>Fermented beans contained significantly less soluble fiber and raffinose than nonfermented beans, and when cooked, the fermented beans also displayed a significant reduction in trypsin inhibitors and tannins.</p>" },
        C: { body: "<p>When the fermented beans were analyzed, they were found to contain two microorganisms, <em>Lactobacillus casei</em> and <em>Lactobacillus plantarum</em>, that are theorized to increase the amount of nitrogen absorbed by the gut after eating beans.</p>" },
        D: { body: "<p>Both fermented and nonfermented black beans contained significantly fewer trypsin inhibitors and tannins after being cooked at high pressure.</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is the best answer because it presents a finding that would best support Granito and Álvarez's claim that fermenting black beans makes them easier to digest and more nutritious. The text indicates that high levels of soluble fiber and raffinose in black beans make the beans hard to digest and that tannins and trypsin inhibitors make it harder for the body to extract nutrients from the beans. If it were found that fermenting the beans significantly reduces their levels of soluble fiber, raffinose, trypsin inhibitors, and tannins when cooked, this would directly support the claim that fermentation improves the digestibility of the beans and makes them more nutritious.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Hard"
    }
  },
  {
    questionId: "23c33e5e",
    externalId: "23c33e5e",
    section: "Reading and Writing",
    prompt: "<p>Recently, scientists looked at data collected by NASA's InSight lander to learn more about seismic activity on Mars, known as marsquakes. The data show that the marsquakes all started from the same location on the planet. This discovery was surprising to scientists, as they expected that the marsquakes would originate from all over the planet because of the cooling of the planet's surface. Now, scientists believe that there could be areas of active magma flows deep beneath the planet's surface that trigger the marsquakes.</p><p>According to the text, what was surprising to scientists studying the seismic activity data from NASA's InSight lander?</p>",
    answer: {
      choices: {
        A: { body: "<p>The surface temperature of Mars has been rising.</p>" },
        B: { body: "<p>There were different types of seismic waves causing marsquakes.</p>" },
        C: { body: "<p>NASA's InSight lander collected less data than scientists had expected.</p>" },
        D: { body: "<p>All the marsquakes started from the same location on the planet.</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is the best answer because it presents a statement about what surprised the scientists that is supported by the text. The text states that the marsquakes described in the data from NASA's InSight lander originated from the same location on Mars. The text goes on to say that because they had expected the opposite (that marsquakes would originate from all over the planet) this discovery surprised the scientists.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Central Ideas and Details",
      difficulty: "Medium"
    }
  },
  {
    questionId: "798a9aa8",
    externalId: "798a9aa8",
    section: "Reading and Writing",
    prompt: "<p>Businesses selling clothing and other fashion items face obstacles in trying to forecast how much product to order: tastes and styles change quickly, while manufacturing clothing takes a significant amount of time. Researchers Youran Fu and Marshall Fisher have found that combining sellers' own data with information gathered from social media can dramatically improve the accuracy of such forecasts—by 24 to 57 percent in the cases they directly studied. Better predictions mean demand is easier to meet without retailers becoming overstocked.</p><p>Which choice best states the main idea of the text?</p>",
    answer: {
      choices: {
        A: { body: "<p>Using multiple data sources can enhance the ability of sellers in the fashion industry to anticipate demand.</p>" },
        B: { body: "<p>Social media is revolutionizing how both sellers and researchers view the fashion industry.</p>" },
        C: { body: "<p>Becoming overstocked is the main preoccupation of sellers trying to forecast demand for fashion items.</p>" },
        D: { body: "<p>Retailers can use their own data to accurately predict how tastes and styles are evolving.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer because it most accurately states the main idea of the text. The text explains that fashion retailers face challenges in forecasting product demand due to rapidly changing tastes and lengthy manufacturing times. It then presents research by Fu and Fisher showing that combining retailers' own data with social media information significantly improves forecast accuracy. The text concludes by noting that better predictions help retailers meet demand without becoming overstocked. Thus, the main idea is that using multiple data sources (retailers' own data combined with social media information) can enhance fashion retailers' ability to anticipate demand.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Central Ideas and Details",
      difficulty: "Medium"
    }
  },
  {
    questionId: "1f246569",
    externalId: "1f246569",
    section: "Reading and Writing",
    prompt: "<p>Using the Stratospheric Observatory for Infrared Astronomy (SOFIA), a team of astronomers mapped out the magnetic field of G47, one of the Milky Way's galactic bones (dense clouds of gas and dust that run through the middle of the arm of a spiral galaxy). Surprisingly, the map revealed a magnetic field with no clear pattern or direction. The researchers had expected the magnetic field to be similar to the more uniform fields seen in galactic bones in other arms of the Milky Way.</p><p>According to the text, what was surprising about the researchers' mapping of the magnetic field of galactic bone G47?</p>",
    answer: {
      choices: {
        A: { body: "<p>It showed a weaker magnetic field than expected.</p>" },
        B: { body: "<p>It implied that previous mappings of the magnetic field were inaccurate.</p>" },
        C: { body: "<p>It produced magnetic field measurements similar to those for other galactic bones.</p>" },
        D: { body: "<p>It revealed a magnetic field that wasn't uniform.</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is the best answer because it presents the point about the magnetic field mapping that the text describes as surprising. The text indicates that a team of astronomers mapped the magnetic field of G47, a galactic bone in the Milky Way, and that the mapping \"surprisingly\" revealed \"no clear pattern or direction\" in the magnetic field. The text then adds that the researchers had thought the magnetic field would be as uniform as the magnetic fields of other galactic bones in the Milky Way are. In other words, the researchers were surprised that the mapping revealed a magnetic field that wasn't uniform.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Central Ideas and Details",
      difficulty: "Medium"
    }
  },
  {
    questionId: "93fe6af0",
    externalId: "93fe6af0",
    section: "Reading and Writing",
    prompt: "<p>The widespread use of social media enables linguists to study changes in language usage in real time. A notable recent example is the proliferation of the affix <em>meng-</em> among speakers of Bahasa Indonesia, the official language of Indonesia. Linguists observed <em>meng-</em> originate as an onomatopoetic tag that social-media users applied to images of cats they posted; over time, users increasingly applied it as a prefix to existing words (e.g., <em>mengsedih</em> affixes <em>meng-</em> to the word for sad) in text that they posted. From there, it has begun to move into spoken Bahasa Indonesia. Linguists have noted many similar examples of this phenomenon occurring in other languages, suggesting that social media ______</p><p>Which choice most logically completes the text?</p>",
    answer: {
      choices: {
        A: { body: "<p>is more useful for studying informal language than for studying formal or official language.</p>" },
        B: { body: "<p>appears to be exerting an exceptionally strong influence on the evolution of Bahasa Indonesia.</p>" },
        C: { body: "<p>may give linguists a somewhat misleading sense of how languages are changing.</p>" },
        D: { body: "<p>does not merely register changes in language usage but can facilitate such changes.</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is the best answer because it most logically completes the text's discussion of linguists using social media to study changes in language usage in real time, providing the specific example of the affix <em>meng-</em> in Bahasa Indonesia. The text states that linguists first observed <em>meng-</em> being used as an onomatopoeic tag on social media, which then spread to being affixed to existing words in text posted on social media; from there, it has begun to move into spoken Bahasa Indonesia. As presented in the text, this progression from online usage to spoken language suggests that social media does more than just register or reflect changes in language—it can actively drive such changes. In the case of <em>meng-</em>, the text suggests, social media facilitated the movement of the affix from an online tag to part of spoken Bahasa Indonesia.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Inferences",
      difficulty: "Hard"
    }
  },
  {
    questionId: "b1068f41",
    externalId: "b1068f41",
    section: "Reading and Writing",
    prompt: "<p>The Indus River valley civilization flourished in South Asia from 3300 BCE to 1300 BCE. Many examples of the civilization's writing system exist, but researchers haven't yet deciphered it or identified which ancient language it represents. Nevertheless, archaeologists have found historical artifacts, such as clay figures and jewelry, that provide information about the civilization's customs and how its communities were organized. The archaeologists' findings therefore suggest that ______</p><p>Which choice most logically completes the text?</p>",
    answer: {
      choices: {
        A: { body: "<p>investigating an ancient civilization is easier without knowledge of the civilization's language.</p>" },
        B: { body: "<p>knowing an ancient civilization's language isn't necessary in order to learn details about the civilization.</p>" },
        C: { body: "<p>archaeological research should focus on finding additional artifacts rather than deciphering ancient languages.</p>" },
        D: { body: "<p>examining the civilization's historical artifacts has resolved the debate about this civilization's language.</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is the best answer because it most logically completes the text's discussion of the Indus River valley civilization. The text establishes that archaeologists haven't been able to interpret the Indus River valley civilization's writing system but have nevertheless acquired information about the civilization through historical artifacts. The fact that archaeologists have been able to learn about the Indus River valley civilization's customs and community organization from historical artifacts suggests that it isn't necessary to understand an ancient civilization's language to learn about the civilization.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Inferences",
      difficulty: "Medium"
    }
  },
  {
    questionId: "a28d9514",
    externalId: "a28d9514",
    section: "Reading and Writing",
    prompt: "<p>Jean-Bernard Caron and colleagues recently discovered a cache of jellyfish fossils in the Burgess Shale, a site in the Canadian Rockies that is rich in fossils from the Cambrian period (over 500 million years ago). Caron and colleagues claim that these are the oldest jellyfish fossils ever discovered. In the past twenty years, two sites in China and the United States have yielded fossils of a similar age that some experts believe are most likely jellyfish due to their shapes and the appearance of projecting tentacles. But Caron and colleagues argue that the apparent tentacles are in fact the comb rows of ctenophores, gelatinous animals that are only distantly related to jellyfish.</p><p>Which statement, if true, would most directly weaken the claim by Caron and colleagues about the fossils found in China and the United States?</p>",
    answer: {
      choices: {
        A: { body: "<p>Sites in the Canadian Rockies from later periods than the Cambrian period have yielded fossils that have been conclusively identified as ctenophore fossils.</p>" },
        B: { body: "<p>The fossils found in China and the United States are so poorly preserved that though they cannot be conclusively identified as jellyfish, they cannot be conclusively identified as ctenophores either.</p>" },
        C: { body: "<p>While ctenophore fossils have been discovered in China and the United States, they have never been discovered in the Burgess Shale.</p>" },
        D: { body: "<p>The fossils discovered by Caron and colleagues in the Burgess Shale were better preserved than the fossils discovered by other researchers in China and the United States.</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is the best answer because it presents a statement that, if true, would most directly weaken Caron and colleagues' claim that the apparent tentacles in the Chinese and American fossils are actually ctenophore comb rows. If the fossils are so poorly preserved that they cannot be conclusively identified as either organism, neither the claim that they are jellyfish nor, as Caron claims, that they are ctenophores would be supported.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Hard"
    }
  },
  {
    questionId: "e0d51f42",
    externalId: "e0d51f42",
    section: "Reading and Writing",
    prompt: "<p>Ancestral Puebloans, the civilization from which present-day Pueblo tribes descended, emerged as early as 1500 B.C.E. in an area of what is now the southwestern United States and dispersed suddenly in the late 1200s C.E., abandoning established villages with systems for farming crops and turkeys. Recent analysis comparing turkey remains at Mesa Verde, one such village in southern Colorado, to samples from modern turkey populations in the Rio Grande Valley of north central New Mexico determined that the latter birds descended in part from turkeys cultivated at Mesa Verde, with shared genetic markers appearing only after 1280. Thus, researchers concluded that ______</p><p>Which choice most logically completes the text?</p>",
    answer: {
      choices: {
        A: { body: "<p>conditions of the terrains in the Rio Grande Valley and Mesa Verde had greater similarities in the past than they do today.</p>" },
        B: { body: "<p>some Ancestral Puebloans migrated to the Rio Grande Valley in the late 1200s and carried farming practices with them.</p>" },
        C: { body: "<p>Indigenous peoples living in the Rio Grande Valley primarily planted crops and did not cultivate turkeys before 1280.</p>" },
        D: { body: "<p>the Ancestral Puebloans of Mesa Verde likely adopted the farming practices of Indigenous peoples living in other regions.</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is the best answer because it presents the conclusion that most logically follows from the text's discussion of Ancestral Puebloans' migration to the Rio Grande Valley. The text states that in the late 1200s C.E., the Ancestral Puebloan civilization abandoned villages in its original homeland, which included the Mesa Verde site. The text goes on to say that recent genetic analysis has demonstrated that the modern turkey population in the Rio Grande Valley descends partly from the ancient turkeys raised at Mesa Verde, and that the genetic markers shared by the two turkey populations first appeared at Mesa Verde only after 1280 C.E. Therefore, it can reasonably be concluded that some Ancestral Puebloans migrated to the Rio Grande Valley in the late 1200s and carried their agricultural practices—including the farming of turkeys—to their new home.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Inferences",
      difficulty: "Hard"
    }
  },
  {
    questionId: "4f1d7c3c",
    externalId: "4f1d7c3c",
    section: "Reading and Writing",
    prompt: "<p>Researchers Carolina Laura Morales and Anna Traveset gathered data about flowering plants growing alongside each other in various locations. In each case, the researchers identified one plant as a \"target species\" and a nearby plant as a \"neighboring species.\" The researchers then calculated a positive or negative value to show how the neighboring species affected pollinator visits to the target species. One example of a neighboring species with a negative effect value is the ______</p><p>Which choice most effectively uses data from the table to complete the example?</p>",
    answer: {
      choices: {
        A: { body: "<p>Himalayan balsam.</p>" },
        B: { body: "<p>common dandelion.</p>" },
        C: { body: "<p>star chickweed.</p>" },
        D: { body: "<p>Virginia spring beauty.</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is the best answer because it most effectively uses data from the table to complete the example of a neighboring species that has a negative effect value. The table lists neighboring species, target species, and effect values. The table shows that only one neighboring species, the common dandelion, has a negative effect value (−0.6254).</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Easy"
    }
  },
  {
    questionId: "2e16d315",
    externalId: "2e16d315",
    section: "Reading and Writing",
    prompt: "<p>Two kinds of clamshell tools used by Neanderthals were dug up in a cave on the western coast of Italy. Archaeologist Paola Villa and her colleagues studied the tools and determined that Neanderthals either collected clams that had washed onto the beach or harvested clams from the seafloor and then sharpened the shells to make tools. The highest number of tools made from clamshells that were collected from the beach was found at a depth of ______</p><p>Which choice most effectively uses data from the table to complete the text?</p>",
    answer: {
      choices: {
        A: { body: "<p>5–6 meters below the surface.</p>" },
        B: { body: "<p>4–5 meters below the surface.</p>" },
        C: { body: "<p>3–4 meters below the surface.</p>" },
        D: { body: "<p>6–7 meters below the surface.</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is the best answer because it most effectively uses data from the table to complete the statement about the depth at which the highest number of tools made from clamshells that Neanderthals collected from the beach was found. The table presents the depths at which Neanderthal clamshell tools were found, and, for each depth, the number of those tools made from clamshells that washed up on the beach and the number made from clamshells harvested from the seafloor. The table indicates that the highest number made from clamshells collected from the beach was 99 and that these tools were found at a depth of 3–4 meters.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Easy"
    }
  },
  {
    questionId: "f48d9861",
    externalId: "f48d9861",
    section: "Reading and Writing",
    prompt: "<p>Cats can judge unseen people's positions in space by the sound of their voices and thus react with surprise when the same person calls to them from two different locations in a short span of time. Saho Takagi and colleagues reached this conclusion by measuring cats' levels of surprise based on their ear and head movements while the cats heard recordings of their owners' voices from two speakers spaced far apart. Cats exhibited a low level of surprise when owners' voices were played twice from the same speaker, but they showed a high level of surprise when the voice was played once each from the two different speakers.</p><p>According to the text, how did the researchers determine the level of surprise displayed by the cats in the study?</p>",
    answer: {
      choices: {
        A: { body: "<p>They watched how each cat moved its ears and head.</p>" },
        B: { body: "<p>They examined how each cat reacted to the voice of a stranger.</p>" },
        C: { body: "<p>They studied how each cat physically interacted with its owner.</p>" },
        D: { body: "<p>They tracked how each cat moved around the room.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer because it explains how the researchers determined the level of surprise displayed by the cats in the study. The text states that Saho Takagi and colleagues played recordings of the voice of each cat's owner and measured how surprised the cat was by the recording based on how it moved its ears and head.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Central Ideas and Details",
      difficulty: "Medium"
    }
  },
  {
    questionId: "6736cf78",
    externalId: "6736cf78",
    section: "Reading and Writing",
    prompt: "<p>\"Mrs. Spring Fragrance\" is a 1912 short story by Sui Sin Far. In the story, Mrs. Spring Fragrance, a Chinese immigrant living in Seattle, is traveling in California. In letters to her husband and friend, she demonstrates her concern for what's happening at her home in Seattle while she is away: ______</p><p>Which quotation from Mrs. Spring Fragrance's letters most effectively illustrates the claim?</p>",
    answer: {
      choices: {
        A: { body: "<p>\"My honorable cousin is preparing for the Fifth Moon Festival, and wishes me to compound for the occasion some American 'fudge,' for which delectable sweet, made by my clumsy hands, you have sometimes shown a slight prejudice.\"</p>" },
        B: { body: "<p>\"Next week I accompany Ah Oi to the beauteous town of San José. There will we be met by the son of the Illustrious Teacher.\"</p>" },
        C: { body: "<p>\"Forget not to care for the cat, the birds, and the flowers. Do not eat too quickly nor fan too vigorously now that the weather is warming.\"</p>" },
        D: { body: "<p>\"I am enjoying a most agreeable visit, and American friends, as also our own, strive benevolently for the accomplishment of my pleasure.\"</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is the best answer because it presents a quotation that illustrates the claim that Mrs. Spring Fragrance demonstrates concern for what's happening at home while she's in California. By giving reminders to \"care for the cat, the birds, and the flowers,\" \"not eat too quickly,\" and avoid engaging in strenuous activity in the heat, Mrs. Spring Fragrance shows that she's thinking about what's happening at home and wants to ensure everything is taken care of.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Medium"
    }
  },
  {
    questionId: "80aab1bd",
    externalId: "80aab1bd",
    section: "Reading and Writing",
    prompt: "<p>In terms of area and population, the three smallest Arabian Peninsula countries are Bahrain, Qatar, and Kuwait.</p><p>According to the table, what is the total area of Bahrain?</p>",
    answer: {
      choices: {
        A: { body: "<p>4,268,873 square miles</p>" },
        B: { body: "<p>4,471 square miles</p>" },
        C: { body: "<p>304 square miles</p>" },
        D: { body: "<p>6,880 square miles</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is the best answer because it states the total area of Bahrain that is indicated in the table. The table presents the total area (in square miles) and population for Bahrain, Qatar, and Kuwait, and it indicates that the total area of Bahrain is 304 square miles.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Easy"
    }
  },
  {
    questionId: "82148e88",
    externalId: "82148e88",
    section: "Reading and Writing",
    prompt: "<p>Researchers Narelle Haworth and Amy Schramm studied bicycling behavior in Queensland, Australia. Haworth and Schramm asked adult bike riders questions about their level of experience, reasons for riding a bike, and route preferences. The researchers claim that <u>experienced riders who mainly bike to work tend to prefer routes that reduce their travel time</u>.</p><p>Which survey response from a bike rider in Queensland would best support the underlined claim?</p>",
    answer: {
      choices: {
        A: { body: "<p>\"I have a bike, but I don't ride it very often. When the weather is nice, I sometimes use my bike to go into town to do some shopping.\"</p>" },
        B: { body: "<p>\"I just got a new bike, and I'm looking forward to going on rides with my friends soon.\"</p>" },
        C: { body: "<p>\"I bike to my job every day. There's a nice bike path that goes through a park, but I use the bike lane on the main road because it's faster.\"</p>" },
        D: { body: "<p>\"I usually bike to work, but I'm taking the bus now because my bike has a broken part that needs to be fixed.\"</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is the best answer because it presents a response that best supports the underlined claim that experienced riders who mainly bike to work tend to prefer routes that reduce their travel time. The bike rider responds that they bike to work every day and that they use the bike lane because it is faster; thus, it is reasonable to assume that they are an experienced rider who prefers routes that reduce their travel time to work.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Easy"
    }
  },
  {
    questionId: "f1be8b46",
    externalId: "f1be8b46",
    section: "Reading and Writing",
    prompt: "<p>Studying tools unearthed at a cave site on the western coast of Italy, archaeologist Paola Villa and colleagues have determined that prehistoric Neanderthal groups fashioned them from shells of clams that they harvested from the seafloor while wading or diving or that washed up on the beach. Clamshells become thin and eroded as they wash up on the beach, while those on the seafloor are smooth and sturdy, so the research team suspects that Neanderthals prized the tools made with seafloor shells. However, the team also concluded that those tools were likely more challenging to obtain, noting that ______</p><p>Which choice most effectively uses data from the table to support the research team's conclusion?</p>",
    answer: {
      choices: {
        A: { body: "<p>at each depth below the surface in the cave, the difference in the numbers of tools of each type suggests that shells were easier to collect from the beach than to harvest from the seafloor.</p>" },
        B: { body: "<p>the highest number of tools were at a depth of 3–4 meters below the surface, which suggests that the Neanderthal population at the site was highest during the related period of time.</p>" },
        C: { body: "<p>at each depth below the surface in the cave, the difference in the numbers of tools of each type suggests that Neanderthals preferred to use clamshells from the beach because of their durability.</p>" },
        D: { body: "<p>the higher number of tools at depths of 5–6 meters below the surface in the cave than at depths of 4–5 meters below the surface suggests that the size of clam populations changed over time.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer because it most effectively uses data from the table to support the researchers' conclusion about the harvesting of clamshells by Neanderthals for use as tools. The text explains that Neanderthals used clamshells to make tools and that the sturdiest, and therefore the most desirable, shells for this purpose are found on the seafloor, not on the beach. However, the researchers also concluded that the clamshell tools made from shells from the seafloor are rarer than those made from shells from the beach. Meanwhile the table shows that at each depth, the number of tools made from shells from the beach exceeds the number made from the more desirable shells from the seafloor. The fact that the more desirable shells are less common suggests that it was significantly more difficult to harvest shells from the seafloor than from the beach.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Hard"
    }
  },
  {
    questionId: "aefb6235",
    externalId: "aefb6235",
    section: "Reading and Writing",
    prompt: "<p>NASA's Aspera mission, led by Carlos Vargas, will investigate the circumgalactic medium (CGM), the huge swaths of low-density gas that fill and surround galaxies. Specifically, the team will focus on portions of the gas that exist in a \"warm-hot\" phase: these portions haven't previously been observable but are thought to fuel new star formation and hold most of the mass that makes up a galaxy. Using a telescope capable of revealing these parts of the CGM, the Aspera mission should help answer long-standing questions about how galaxies emerge, change, and even interact.</p><p>Which choice best states the main idea of the text?</p>",
    answer: {
      choices: {
        A: { body: "<p>As the leader of NASA's Aspera mission, Vargas will be the first person to investigate the makeup of the CGM.</p>" },
        B: { body: "<p>Although galaxies that are surrounded by the CGM have been studied, researchers have been unable to directly observe low-density gas in the CGM in the \"warm-hot\" phase.</p>" },
        C: { body: "<p>Researchers don't yet have a complete understanding of the process of galaxy evolution but have raised the possibility that galaxies interact with each other at times.</p>" },
        D: { body: "<p>The Aspera mission is expected to produce the first direct observations of CGM gas in the \"warm-hot\" phase, which likely has an important role in the evolution of galaxies.</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is the best answer because it most accurately states the main idea of the text. The text begins by mentioning NASA's Aspera mission, which will investigate the low-density gas that makes up the circumgalactic medium (CGM). According to the text, this mission will focus on a portion of the CGM's gas that exists in a \"warm-hot\" phase; this \"warm-hot\" gas has not been previously observed, but it is thought to make up most of the mass of galaxies and play a part in star formation. Finally, the text mentions a telescope capable of examining this previously unobservable \"warm-hot\" gas: the Aspera mission will use this telescope in the hope of answering questions about galaxy formation and change. Therefore, the main idea of the text is that the Aspera mission is likely to produce the first direct observations of CGM gas in the \"warm-hot\" phase, which likely has an important role in the evolution of galaxies.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Central Ideas and Details",
      difficulty: "Medium"
    }
  },
  {
    questionId: "e4466b2f",
    externalId: "e4466b2f",
    section: "Reading and Writing",
    prompt: "<p>The following text is adapted from Countee Cullen's 1926 poem \"Thoughts in a Zoo.\"</p><p>They in their cruel traps, and we in ours,<br/>Survey each other's rage, and pass the hours<br/>Commiserating each the other's woe,<br/>To mitigate his own pain's fiery glow.<br/>Man could but little proffer in exchange<br/>Save that his cages have a larger range.<br/>That lion with his lordly, untamed heart<br/>Has in some man his human counterpart,<br/>Some lofty soul in dreams and visions wrapped,<br/>But in the stifling flesh securely trapped.</p><p>Based on the text, what challenge do humans sometimes experience?</p>",
    answer: {
      choices: {
        A: { body: "<p>They cannot effectively tame certain wild animals because of a lack of compassion.</p>" },
        B: { body: "<p>They cannot focus on setting attainable goals because of a lack of motivation.</p>" },
        C: { body: "<p>They quickly become frustrated when faced with difficult tasks because of a lack of self-control.</p>" },
        D: { body: "<p>They have aspirations that cannot be fulfilled because of certain limitations.</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is the best answer. The text metaphorically likens humans to animals in a zoo, suggesting that humans have dreams that they cannot fulfill because they are trapped.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Central Ideas and Details",
      difficulty: "Hard"
    }
  },
  {
    questionId: "d8b38779",
    externalId: "d8b38779",
    section: "Reading and Writing",
    prompt: "<p>To address the susceptibility of materials used in components of high-performance machinery, such as aircraft engines, to creep (deformation that is induced by persistent mechanical stress and that often occurs at elevated temperatures), materials researchers have developed silicon carbide (SiC) fibers for producing aerospace composites. Testing the thermomechanical properties of several commercially available SiC fibers, Ramakrishna T. Bhatt et al. found that in comparison with two polymer-derived SiC fibers, a nitrogen-treated SiC fiber exhibited a lower minimum creep rate, a measure of the rate at which a stress-exposed material deforms at a constant temperature and uniaxial load. The finding suggests that ______</p><p>Which choice most logically completes the text?</p>",
    answer: {
      choices: {
        A: { body: "<p>unlike the two polymer-derived SiC fibers, the nitrogen-treated SiC fiber can substantially inhibit creep, provided that temperatures and loads are consistent.</p>" },
        B: { body: "<p>the two polymer-derived SiC fibers likely hold similar potential for reducing the creep resistance of materials exposed to stress and elevated temperatures, thus prolonging the life span of aerospace machinery.</p>" },
        C: { body: "<p>composites based on the two polymer-derived SiC fibers have chemical properties that may improve the mechanical and thermal stability of aerospace equipment to a greater extent than do composites based on the nitrogen-treated SiC fiber.</p>" },
        D: { body: "<p>aerospace composites containing the nitrogen-treated SiC fiber may have the ability to withstand mechanical stress for a longer period of time than can aerospace composites containing either of the two polymer-derived SiC fibers.</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is the best answer because it most logically completes the text's discussion of silicon carbide (SiC) fibers and creep, or deformation related to ongoing mechanical stress and elevated temperatures. The text states that Bhatt et al. found that a nitrogen-treated SiC fiber had a lower minimum creep rate than two polymer-derived SiC fibers did. Because having a lower creep rate means that the material is slower to deform with exposure to stress, as the text explains, this finding suggests that aerospace composites made with the nitrogen-treated SiC fiber may be able to withstand mechanical stress for a longer period than those made with the other two polymer-derived SiC fibers can.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Inferences",
      difficulty: "Hard"
    }
  },
  {
    questionId: "a450897e",
    externalId: "a450897e",
    section: "Reading and Writing",
    prompt: "<p><em>O Pioneers!</em> is a 1913 novel by Willa Cather. In the novel, Cather portrays Alexandra Bergson as having a deep emotional connection to her natural surroundings: ______</p><p>Which quotation from <em>O Pioneers!</em> most effectively illustrates the claim?</p>",
    answer: {
      choices: {
        A: { body: "<p>\"She had never known before how much the country meant to her. The chirping of the insects down in the long grass had been like the sweetest music. She had felt as if her heart were hiding down there, somewhere, with the quail and the plover and all the little wild things that crooned or buzzed in the sun. Under the long shaggy ridges, she felt the future stirring.\"</p>" },
        B: { body: "<p>\"Alexandra talked to the men about their crops and to the women about their poultry. She spent a whole day with one young farmer who had been away at school, and who was experimenting with a new kind of clover hay. She learned a great deal.\"</p>" },
        C: { body: "<p>\"Alexandra drove off alone. The rattle of her wagon was lost in the howling of the wind, but her lantern, held firmly between her feet, made a moving point of light along the highway, going deeper and deeper into the dark country.\"</p>" },
        D: { body: "<p>\"It was Alexandra who read the papers and followed the markets, and who learned by the mistakes of their neighbors. It was Alexandra who could always tell about what it had cost to fatten each steer, and who could guess the weight of a hog before it went on the scales closer than John Bergson [her father] himself.\"</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer because it presents the quotation that most directly illustrates the claim that Cather portrays Alexandra as having a deep emotional connection to her natural surroundings. This quotation states that the country meant a great deal to Alexandra and then goes on to detail several ways in which her natural surroundings affect her emotionally: the insects sound like \"the sweetest music,\" she feels as though \"her heart were hiding\" in the grass \"with the quail and the plover,\" and near the ridges she feels \"the future stirring.\"</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
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
