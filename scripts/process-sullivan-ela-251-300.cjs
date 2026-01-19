const fs = require('fs');
const path = require('path');

// Output directory
const outputDir = '/Users/stephenbaker/Development/sat-practice/public/bank/questions';

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// All 50 questions extracted from the PDF
const questions = [
  {
    questionId: "68bef552",
    externalId: "68bef552",
    section: "Reading",
    prompt: "<p>Many literary theorists distinguish between fabula, a narrative's content, and syuzhet, a narrative's arrangement and presentation of events. In the film The Godfather Part II, the fabula is the story of the Corleone family, and the syuzhet is the presentation of the story as it alternates between two timelines in 1901 and 1958. But literary theorist Mikhail Bakhtin maintained that fabula and syuzhet are insufficient to completely describe a narrative—he held that systematic categorizations of artistic phenomena discount the subtle way in which meaning is created by interactions between the artist, the work, and the audience.</p><p>Which choice best states the main idea of the text?</p>",
    answer: {
      choices: {
        A: { body: "<p>Literary theorist Mikhail Bakhtin argued that there are important characteristics of narratives that are not fully encompassed by two concepts that other theorists have used to analyze narratives.</p>" },
        B: { body: "<p>Literary theorist Mikhail Bakhtin claimed that meaning is not inherent in a narrative but is created when an audience encounters a narrative so that narratives are interpreted differently by different people.</p>" },
        C: { body: "<p>The storytelling methods used in The Godfather Part II may seem unusually complicated, but they can be easily understood when two concepts from literary theory are utilized.</p>" },
        D: { body: "<p>Narratives that are told out of chronological order are more difficult for audiences to understand than are narratives presented chronologically.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer because it most accurately states the main idea of the text. The text begins by explaining that many literary theorists rely on the concepts of fabula (a narrative's content) and syuzhet (a narrative's arrangement and presentation of events) and illustrates these concepts by explaining how they can be applied to the film The Godfather Part II. The text then discusses how Mikhail Bakhtin, a literary theorist, argued that fabula and syuzhet can't fully describe a narrative, since systematic categorizations such as these fail to account for all the ways in which interactions between the artist, the work, and the audience produce meaning. Thus, the main idea is that Bakhtin argued that there are important characteristics of narratives that are not fully encompassed by two concepts that other theorists have used to analyze narratives.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Central Ideas and Details",
      difficulty: "Hard"
    }
  },
  {
    questionId: "1b422cf9",
    externalId: "1b422cf9",
    section: "Reading",
    prompt: "<p><strong>Estimates of Tyrannosaurid Bite Force</strong></p><table><tr><th>Study</th><th>Year</th><th>Estimation method</th><th>Approximate bite force (newtons)</th></tr><tr><td>Cost et al.</td><td>2019</td><td>muscular and skeletal modeling</td><td>35,000–63,000</td></tr><tr><td>Gignac and Erickson</td><td>2017</td><td>tooth-bone interaction analysis</td><td>8,000–34,000</td></tr><tr><td>Meers</td><td>2002</td><td>body-mass scaling</td><td>183,000–235,000</td></tr><tr><td>Bates and Falkingham</td><td>2012</td><td>muscular and skeletal modeling</td><td>35,000–57,000</td></tr></table><p>The largest tyrannosaurids—the family of carnivorous dinosaurs that includes Tarbosaurus, Albertosaurus, and, most famously, Tyrannosaurus rex—are thought to have had the strongest bites of any land animals in Earth's history. Determining the bite force of extinct animals can be difficult, however, and paleontologists Paul Barrett and Emily Rayfield have suggested that an estimate of dinosaur bite force may be significantly influenced by the methodology used in generating that estimate.</p><p>Which choice best describes data from the table that support Barrett and Rayfield's suggestion?</p>",
    answer: {
      choices: {
        A: { body: "<p>The study by Meers used body-mass scaling and produced the lowest estimated maximum bite force, while the study by Cost et al. used muscular and skeletal modeling and produced the highest estimated maximum.</p>" },
        B: { body: "<p>In their study, Gignac and Erickson used tooth-bone interaction analysis to produce an estimated bite force range with a minimum of 8,000 newtons and a maximum of 34,000 newtons.</p>" },
        C: { body: "<p>The bite force estimates produced by Bates and Falkingham and by Cost et al. were similar to each other, while the estimates produced by Meers and by Gignac and Erickson each differed substantially from any other estimate.</p>" },
        D: { body: "<p>The estimated maximum bite force produced by Cost et al. exceeded the estimated maximum produced by Bates and Falkingham, even though both groups of researchers used the same method to generate their estimates.</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is the best answer because it accurately describes data from the table that support Barrett and Rayfield's suggestion about bite force estimates. According to the text, Barrett and Rayfield believe that estimates of dinosaur bite force may be strongly influenced by the methods used to produce them—that is, that different methods may produce significantly different results. The table shows that the studies by Bates and Falkingham and by Cost et al. used the same estimation method (muscular and skeletal modeling) and produced similar bite force estimates (approximately 35,000–57,000 newtons and 35,000–63,000 newtons, respectively). The study by Meers, however, used body-mass scaling and produced a much higher bite force estimate (183,000–235,000 newtons), while the study by Gignac and Erickson used tooth-bone interaction analysis and produced a much lower bite force estimate (8,000–34,000 newtons). The fact that one method produced similar estimates in two different studies and that two different methods used in other studies produced substantially different estimates supports the idea that dinosaur bite force estimates are significantly influenced by the methodology used to produce them.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Hard"
    }
  },
  {
    questionId: "c0ee4b2d",
    externalId: "c0ee4b2d",
    section: "Reading",
    prompt: "<p>The ice melted on a Norwegian mountain during a particularly warm summer in 2019, revealing a 1,700-year-old sandal to a mountaineer looking for artifacts. The sandal would normally have degraded quickly, but it was instead well preserved for centuries by the surrounding ice. According to archaeologist Espen Finstad and his team, the sandal, like those worn by imperial Romans, wouldn't have offered any protection from the cold in the mountains, so some kind of insulation, like fabric or animal skin, would have needed to be worn on the feet with the sandal.</p><p>What does the text indicate about the discovery of the sandal?</p>",
    answer: {
      choices: {
        A: { body: "<p>Temperatures contributed to both protecting and revealing the sandal.</p>" },
        B: { body: "<p>The discovery revealed that the Roman Empire had more influence on Norway than archaeologists previously assumed.</p>" },
        C: { body: "<p>Archaeologists would have found the sandal eventually without help from the general public.</p>" },
        D: { body: "<p>The sandal would have degraded if it hadn't been removed from the ice.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer. A \"particularly warm summer\" revealed the sandal, and centuries of ice kept it \"well preserved.\"</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Central Ideas and Details",
      difficulty: "Medium"
    }
  },
  {
    questionId: "3f3fe0d9",
    externalId: "3f3fe0d9",
    section: "Reading",
    prompt: "<p>In the South Pacific, New Caledonian crows use two different kinds of stick tools. One tool is complex. The crows shape a stick from a rare plant into a hook. The other tool is basic. The crows find a stick without a hook on the ground. The hooked tool is harder to get but is much better than the basic tool at removing prey from holes. When studying New Caledonian crows, ecologist Barbara Klump found that they hold the hooked tools in their claws when not using them, or they carefully put them in a safe place. The crows don't do the same with the basic tools. This suggests to Klump that the ______</p><p>Which choice most logically completes the text?</p>",
    answer: {
      choices: {
        A: { body: "<p>hooked stick tools are more valuable to the crows than the stick tools without hooks.</p>" },
        B: { body: "<p>hooked stick tools are easier for most of the crows to hold than the stick tools without hooks.</p>" },
        C: { body: "<p>crows prefer to share their hooked stick tools but don't share the stick tools without hooks.</p>" },
        D: { body: "<p>crows realize that both kinds of stick tools are less effective than their claws are at removing prey from holes.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer because it most logically completes the text's discussion of the two types of stick tools used by New Caledonian crows. The text indicates that the more effective type of tool has a hook that the crows make themselves, while the other type of tool is simply a stick without a hook that the crows find and don't shape in any way. According to the text, Klump found that the crows keep hooked tools—but not the tools without hooks—in their grasp or in safe places when they aren't using the tools. If the hooked tools are more effective than the tools without hooks are and the crows are more protective of the hooked tools than they are of the tools without hooks, it's reasonable to conclude that the hooked tools are more valuable to the crows than the tools without hooks are.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Inferences",
      difficulty: "Easy"
    }
  },
  {
    questionId: "2d77d2b7",
    externalId: "2d77d2b7",
    section: "Reading",
    prompt: "<p>For many years, the only existing fossil evidence of mixopterid eurypterids—an extinct family of large aquatic arthropods known as sea scorpions and related to modern arachnids and horseshoe crabs—came from four species living on the paleocontinent of Laurussia. In a discovery that expands our understanding of the geographical distribution of mixopterids, paleontologist Bo Wang and others have identified fossilized remains of a new mixopterid species, Terropterus xiushanensis, that lived over 400 million years ago on the paleocontinent of Gondwana.</p><p>According to the text, why was Wang and his team's discovery of the Terropterus xiushanensis fossil significant?</p>",
    answer: {
      choices: {
        A: { body: "<p>The fossil constitutes the first evidence found by scientists that mixopterids lived more than 400 million years ago.</p>" },
        B: { body: "<p>The fossil helps establish that mixopterids are more closely related to modern arachnids and horseshoe crabs than previously thought.</p>" },
        C: { body: "<p>The fossil helps establish a more accurate timeline of the evolution of mixopterids on the paleocontinents of Laurussia and Gondwana.</p>" },
        D: { body: "<p>The fossil constitutes the first evidence found by scientists that mixopterids existed outside the paleocontinent of Laurussia.</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is the best answer because it states why Wang and his team's discovery of the Terropterus xiushanensis fossil was significant. The text explains that up until Wang and his team's discovery, the only fossil evidence of mixopterids came from the paleocontinent of Laurussia. Wang and his team, however, identified fossil remains of a mixopterid species from the paleocontinent Gondwana. Therefore, the team's discovery was significant because the fossil remains of a mixopterid species were outside of the paleocontinent Laurussia.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Central Ideas and Details",
      difficulty: "Hard"
    }
  },
  {
    questionId: "da287262",
    externalId: "da287262",
    section: "Reading",
    prompt: "<p>The Land of Enchantment is a 1906 travel book by Lilian Whiting. In the book, which describes the experience of traveling through the southwestern United States by train, Whiting reflects on the escape from everyday life that such a journey provides: ______</p><p>Which quotation from The Land of Enchantment most effectively illustrates the claim?</p>",
    answer: {
      choices: {
        A: { body: "<p>\"The opportunities and advantages already offered and constantly increasing are greater than would at first be considered possible.\"</p>" },
        B: { body: "<p>\"The social and the picturesque charm of the long journey is singularly enhanced by the leisurely stops made for refreshment.\"</p>" },
        C: { body: "<p>\"The real journey begins, of course, at Chicago, and as these trains leave in the evening the traveller fares forth in the seclusion of his berth.\"</p>" },
        D: { body: "<p>\"One experiences a certain sense of detachment from ordinary day and daylight duties that is exhilarating.\"</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is the best answer because. This quotation specifically describes a \"sense of detachment from ordinary day,\" which matches the claim's focus on \"escape from everyday life.\"</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Medium"
    }
  },
  {
    questionId: "f36559aa",
    externalId: "f36559aa",
    section: "Reading",
    prompt: "<p>The Souls of Black Folk is a 1903 book by W.E.B. Du Bois. In the book, Du Bois suggests that upon hearing Black folk songs, he felt an intuitive and sometimes unexpected sense of cultural recognition: ______</p><p>Which quotation from The Souls of Black Folk most effectively illustrates the claim?</p>",
    answer: {
      choices: {
        A: { body: "<p>\"[Black folk music] still remains as the singular spiritual heritage of the nation and the greatest gift of the Negro people.\"</p>" },
        B: { body: "<p>\"Ever since I was a child these songs have stirred me strangely. They came out of the South unknown to me, one by one, and yet at once I knew them as of me and of mine.\"</p>" },
        C: { body: "<p>\"Caricature has sought again to spoil the quaint beauty of the music, and has filled the air with many debased melodies which vulgar ears scarce know from the real. But the true Negro folk-song still lives in the hearts of those who have heard them truly sung and in the hearts of the Negro people.\"</p>" },
        D: { body: "<p>\"The songs are indeed the siftings of centuries; the music is far more ancient than the words, and in it we can trace here and there signs of development.\"</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is the best answer because the quotation from The Souls of Black Folk illustrates the claim that Du Bois felt a sense of cultural recognition when he heard Black folk songs. In the quotation, Du Bois explains that for his entire life, Black folk songs \"stirred [him] strangely.\" Even though they originated in the South, a region he wasn't familiar with, he knew the songs \"as of me and of mine.\" That is, he identified strongly with them and associated them with his community. Therefore, Du Bois felt an intuitive sense of cultural recognition when he heard Black folk songs.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Hard"
    }
  },
  {
    questionId: "a2641e5f",
    externalId: "a2641e5f",
    section: "Reading",
    prompt: "<p>Although many transposons, DNA sequences that move within an organism's genome through shuffling or duplication, have become corrupted and inactive over time, those from the long interspersed nuclear elements (LINE) family appear to remain active in the genomes of some species. In humans, they are functionally important within the hippocampus, a brain structure that supports complex cognitive processes. When the results of molecular analysis of two species of octopus—an animal known for its intelligence—were announced in 2022, the confirmation of a LINE transposon in Octopus vulgaris and Octopus bimaculoides genomes prompted researchers to hypothesize that that transposon family is tied to a species' capacity for advanced cognition.</p><p>Which finding, if true, would most directly support the researchers' hypothesis?</p>",
    answer: {
      choices: {
        A: { body: "<p>The LINE transposon in O. vulgaris and O. bimaculoides genomes is active in an octopus brain structure that functions similarly to the human hippocampus.</p>" },
        B: { body: "<p>The human genome contains multiple transposons from the LINE family that are all primarily active in the hippocampus.</p>" },
        C: { body: "<p>A consistent number of copies of LINE transposons is present across the genomes of most octopus species, with few known corruptions.</p>" },
        D: { body: "<p>O. vulgaris and O. bimaculoides have smaller brains than humans do relative to body size, but their genomes contain sequences from a wider variety of transposon families.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer. The text says that LINE transposons are important in the human hippocampus, which supports complex cognition. If the LINE transposon found in octopuses is active in a similar part of their brain, that would suggest that LINE transposons support complex cognition in octopuses too, which in turn supports the hypothesis that LINE transposons are linked to advanced cognition in general.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Medium"
    }
  },
  {
    questionId: "0ce17852",
    externalId: "0ce17852",
    section: "Reading",
    prompt: "<p>Although military veterans make up a small proportion of the total population of the United States, they occupy a significantly higher proportion of the jobs in the civilian government. One possible explanation for this disproportionate representation is that military service familiarizes people with certain organizational structures that are also reflected in the civilian government bureaucracy, and this familiarity thus ______</p><p>Which choice most logically completes the text?</p>",
    answer: {
      choices: {
        A: { body: "<p>makes civilian government jobs especially appealing to military veterans.</p>" },
        B: { body: "<p>alters the typical relationship between military service and subsequent career preferences.</p>" },
        C: { body: "<p>encourages nonveterans applying for civilian government jobs to consider military service instead.</p>" },
        D: { body: "<p>increases the number of civilian government jobs that require some amount of military experience to perform.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer because it presents the conclusion that most logically follows from the text's discussion of military veterans working in civilian government jobs in the United States. The text indicates that the proportion of military veterans working in civilian government jobs is considerably higher than the proportion of military veterans in the population as a whole. The text also notes that the unusually high representation of military veterans in these jobs may be a result of the organizational structures shared by civilian government entities and the military. Hence, it's reasonable to infer that it's the familiarity of the structures of civilian government that makes jobs there particularly attractive to military veterans.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Inferences",
      difficulty: "Medium"
    }
  },
  {
    questionId: "347e5a71",
    externalId: "347e5a71",
    section: "Reading",
    prompt: "<p>Aerogels are highly porous foams consisting mainly of tiny air pockets within a solidified gel. These lightweight materials are often applied to spacecraft and other equipment required to withstand extreme conditions, as they provide excellent insulation despite typically being brittle and eventually fracturing due to degradation from repeated exposure to high heat. Now, Xiangfeng Duan of the University of California, Los Angeles, and colleagues have developed an aerogel with uniquely flexible properties. Unlike earlier aerogels, Duan's team's material contracts rather than expands when heated and fully recovers after compressing to just 5% of its original volume, suggesting that ______</p><p>Which choice most logically completes the text?</p>",
    answer: {
      choices: {
        A: { body: "<p>the aerogel's remarkable flexibility results from its higher proportion of air pockets to solidified gel as compared to other aerogels.</p>" },
        B: { body: "<p>the aerogel's overall strength is greater than that of other insulators but its ability to withstand exposure to intense heat is lower.</p>" },
        C: { body: "<p>the aerogel will be more effective as an insulator for uses that involve gradual temperature shifts than for those that involve rapid heat increases.</p>" },
        D: { body: "<p>the aerogel will be less prone to the structural weakness that ultimately causes most other aerogels to break down with use.</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is the best answer because it most logically completes the text's discussion of aerogels. The text states that aerogels—highly porous foams—offer \"excellent insulation\" but typically break down after prolonged exposure to high heat. However, according to the text, Duan and colleagues developed an aerogel that \"contracts rather than expands when heated\" and recovers its original volume after this contraction. Thus, it is logical to conclude that Duan's team's aerogel material will be less prone to the structural weakness that caused earlier aerogels to break down.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Inferences",
      difficulty: "Hard"
    }
  },
  {
    questionId: "e038ac56",
    externalId: "e038ac56",
    section: "Reading",
    prompt: "<p><strong>Municipalities' Responses to Inquiries about Potential Incentives for Firm</strong></p><p>[Graph showing responses: no response, responded to inquiry, offered incentive - comparing announcement before election vs announcement after election]</p><p>In the United States, firms often seek incentives from municipal governments to expand to those municipalities. A team of political scientists hypothesized that municipalities are much more likely to respond to firms and offer incentives if expansions can be announced in time to benefit local elected officials than if they can't. The team contacted officials in thousands of municipalities, inquiring about incentives for a firm looking to expand and indicating that the firm would announce its expansion on a date either just before or just after the next election.</p><p>Which choice best describes data from the graph that weaken the team's hypothesis?</p>",
    answer: {
      choices: {
        A: { body: "<p>A large majority of the municipalities that received an inquiry mentioning plans for an announcement before the next election didn't respond to the inquiry.</p>" },
        B: { body: "<p>The proportion of municipalities that responded to the inquiry or offered incentives didn't substantially differ across the announcement timing conditions.</p>" },
        C: { body: "<p>Only around half the municipalities that responded to inquiries mentioning plans for an announcement before the next election offered incentives.</p>" },
        D: { body: "<p>Of the municipalities that received an inquiry mentioning plans for an announcement date after the next election, more than 1,200 didn't respond and only around 100 offered incentives.</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is the best answer. The lighter bars show what happened when the announcement was to come before the election, and the darker bars show what happened when the announcement was to come after the election. For all three of the outcomes, the light and dark bars are virtually the same, demonstrating that the announcement timing didn't actually make a difference.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Hard"
    }
  },
  {
    questionId: "42d700d0",
    externalId: "42d700d0",
    section: "Reading",
    prompt: "<p><strong>Daily Distance Traveled by Adult Mountain Lions in Three Seasons</strong></p><table><tr><th>Season</th><th>Kilometers per day traveled by adult females</th><th>Kilometers per day traveled by adult males</th></tr><tr><td>cold-dry</td><td>9.28</td><td>15.81</td></tr><tr><td>monsoon</td><td>12.64</td><td>18.93</td></tr><tr><td>hot-dry</td><td>12.48</td><td>18.87</td></tr></table><p>Wildlife researcher Dana L. Karelus and her colleagues tracked the movements of female and male adult mountain lions over three seasons: the cold-dry season, the hot-dry season, and the monsoon season. They found that the least amount of travel per day occurred in ______</p><p>Which choice most effectively uses data from the table to complete the statement?</p>",
    answer: {
      choices: {
        A: { body: "<p>the cold-dry season for both females and males.</p>" },
        B: { body: "<p>the cold-dry season for females and the hot-dry season for males.</p>" },
        C: { body: "<p>the hot-dry season for females and the monsoon season for males.</p>" },
        D: { body: "<p>the monsoon season for both females and males.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer. Females only traveled 9.28 km per day in the cold-dry season, versus 12.64 and 12.48 km per day in the monsoon and hot-dry seasons, respectively. Males only traveled 15.81 km per day per day in the cold-dry season, versus 18.93 and 18.87 km per day in the monsoon and hot-dry seasons, respectively. So, the cold-dry season was the season where both males and females had the least daily travel.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Easy"
    }
  },
  {
    questionId: "d014df3c",
    externalId: "d014df3c",
    section: "Reading",
    prompt: "<p>The Intertropical Convergence Zone (ITCZ), a band of clouds that encircles Earth in the tropics and is a major rainfall source, shifts position in response to temperature variations across Earth's hemispheres. Data from Huagapo Cave in Peru suggest the ITCZ shifted south during the Little Ice Age (circa 1300–1850), but a shift as far into South America as Huagapo should have led to dry conditions in Central America, which is inconsistent with climate models. To resolve the issue, geologist Yemane Asmerom and colleagues collected data from Yok Balum Cave in Central America and compared them with the Huagapo data. They concluded that during the Little Ice Age, the ITCZ may have expanded northward and southward rather than simply shifted.</p><p>Which finding from Asmerom and colleagues' study, if true, would most directly support their conclusion?</p>",
    answer: {
      choices: {
        A: { body: "<p>Neither the Yok Balum data nor the Huagapo data show significant local variations in temperature during the Little Ice Age.</p>" },
        B: { body: "<p>Both the Yok Balum data and the Huagapo data show increased temperatures and prolonged dry conditions during the Little Ice Age.</p>" },
        C: { body: "<p>The Yok Balum data show prolonged dry conditions during the same portions of the Little Ice Age in which the Huagapo data show heightened levels of rainfall.</p>" },
        D: { body: "<p>The Yok Balum data and the Huagapo data show strongly correlated patterns of high rainfall during the Little Ice Age.</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is the best answer because it presents a finding that, if true, would support Asmerom and colleagues' conclusion that the ITCZ may have expanded northward and southward rather than shifting south during the Little Ice Age. If it is true that Yok Balum in Central America and Huagapo in South America show strongly correlated patterns of high rainfall during the Little Ice Age, such a finding would support Asmerom and colleagues' conclusion by suggesting that the two areas were affected by the same rainfall source, and thus that the ITCZ may have expanded rather than shifted.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Hard"
    }
  },
  {
    questionId: "2ee45938",
    externalId: "2ee45938",
    section: "Reading",
    prompt: "<p>Gorgets, or necklaces with large pendants, have been part of the ceremonial attire of tribes from the US Southeast for centuries. One of the oldest examples, the Fairfield Gorget, was found in Fairfield, Missouri, in 1958. Its overall design resembles that of other art from the region during the Mississippian period (900–1600 CE). Yet the image on the gorget is of a jaguar—a species whose range doesn't extend to Missouri. Jaguar images are common in ancient Mexican art, and Mexico lies squarely in the species' range. Therefore, some scholars argue that long-distance trade in Mexican art objects brought the imagery to Missouri, where a local artist could have adopted it and incorporated it into the Fairfield Gorget.</p><p>Which finding, if true, would most strongly support the underlined explanation?</p>",
    answer: {
      choices: {
        A: { body: "<p>The Fairfield Gorget is dated not to the Mississippian period but instead to the earlier Woodland period, which ended around 900 CE.</p>" },
        B: { body: "<p>The range of the jaguar is shown to have expanded dramatically after the Mississippian period came to a close around 1600 CE.</p>" },
        C: { body: "<p>An ancient Mexican art object is found at a site that dates to the Mississippian period and is close to where the Fairfield Gorget was found.</p>" },
        D: { body: "<p>Certain works by present-day artists from Southeastern tribes reflect outside cultural influences, including contemporary Mexican art.</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is the best answer because it presents a finding that, if true, would most strongly support the underlined explanation that the jaguar imagery on the Fairfield Gorget could have been inspired by art objects brought to Missouri from Mexico. Evidence that an ancient Mexican art object had been found at a site that was close to the Fairfield Gorget in both location and time period would strongly support the explanation that long-distance trade from Mexico took place during the Mississippian period and that jaguar imagery could have reached Missouri by those means.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Hard"
    }
  },
  {
    questionId: "2a9ae43a",
    externalId: "2a9ae43a",
    section: "Reading",
    prompt: "<p>Many of William Shakespeare's tragedies address broad themes that still appeal to today's audiences. For instance, Romeo and Juliet, which is set in the Italy of Shakespeare's time, tackles the themes of parents versus children and love versus hate, and the play continues to be read and produced widely around the world. But understanding Shakespeare's so-called history plays can require a knowledge of several centuries of English history. Consequently, ______</p><p>Which choice most logically completes the text?</p>",
    answer: {
      choices: {
        A: { body: "<p>many theatergoers and readers today are likely to find Shakespeare's history plays less engaging than the tragedies.</p>" },
        B: { body: "<p>some of Shakespeare's tragedies are more relevant to today's audiences than twentieth-century plays.</p>" },
        C: { body: "<p>Romeo and Juliet is the most thematically accessible of all Shakespeare's tragedies.</p>" },
        D: { body: "<p>experts in English history tend to prefer Shakespeare's history plays to his other works.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer because it most logically completes the text's discussion of the relative appeal of different kinds of plays by Shakespeare to today's audiences. According to the text, Shakespeare's tragedies address broad themes that continue to appeal to today's audiences. In contrast, the text indicates that audiences and readers may need to be familiar with several centuries of English history in order to understand Shakespeare's history plays. Because many theatergoers and readers are unlikely to possess such extensive historical knowledge, it follows that they are likely to find Shakespeare's history plays less engaging than his more accessible tragedies.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Inferences",
      difficulty: "Hard"
    }
  },
  {
    questionId: "093f6988",
    externalId: "093f6988",
    section: "Reading",
    prompt: "<p>A subject of much speculation, distinctive sets of parallel ridges mark the icy crust of Europa, Jupiter's smallest moon. Researchers now claim that the ridges' formation mechanism mirrors that of a strikingly similar pair on Greenland's ice sheet. There, surface water seeped through fissures in the sheet and formed a water pocket that subsequently disrupted the overlying ice, forcing fragments of it upward and outward into peaks, as the pocket froze and expanded. Although Europa lacks liquid surface water, the same process could be driven by the moon's subsurface ocean.</p><p>Which choice best states the main idea of the text?</p>",
    answer: {
      choices: {
        A: { body: "<p>Researchers think that the ridges on Europa and the ridges in Greenland may have been formed by the same process even though Europa, unlike Greenland, doesn't have liquid water on its surface.</p>" },
        B: { body: "<p>The primary difference between the ridges on Europa and the ridges in Greenland is that unlike the Europa ridges, the Greenland ridges are parallel.</p>" },
        C: { body: "<p>The pair of ridges found on Greenland's ice sheet appear to have formed long before the recently discovered sets of ridges on Europa formed.</p>" },
        D: { body: "<p>Researchers don't understand why Europa is marked by so many sets of ridges when the moon doesn't have any liquid water on its surface that could have collected and expanded under the icy crust.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer because it accurately states the main idea of the text. The text focuses on formations of parallel ice ridges on Jupiter's moon Europa that are said to be formed by the same mechanism that formed a parallel set of ridges on Greenland's ice sheet. The text indicates that in Greenland, water on the surface seeps to the lower portion of the ice sheet, resulting in uplift that creates the ridges, and it states that although Europa lacks liquid water on its surface, the same process could be driven by an ocean below Europa's surface.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Central Ideas and Details",
      difficulty: "Medium"
    }
  },
  {
    questionId: "b0f6a40e",
    externalId: "b0f6a40e",
    section: "Reading",
    prompt: "<p>In 2022, Crystal Reeck and colleagues studied whether the decision-making modes that guide consumers influence their choice between nonenvironmentally friendly standard electricity plans and environmentally friendly green plans that cap electricity usage. Study participants who self-reported using either an Affect Mode or Role Mode—which prioritize choices that have a stronger positive emotional or social impact, respectively—were more likely to select a green plan. Conversely, participants using a Calculation Mode—which aims to minimize both financial cost and personal inconvenience—were more likely to select a standard plan, even when the green option was cheaper. This finding suggests that participants using a Calculation Mode ______</p><p>Which choice most logically completes the text?</p>",
    answer: {
      choices: {
        A: { body: "<p>were equally unlikely to factor the financial savings of the green plan into their decision-making as were participants using either the Affect or Role Modes.</p>" },
        B: { body: "<p>may have been less strongly motivated to appear socially responsible with their choice of plan than they realized.</p>" },
        C: { body: "<p>may have determined that the green plan imposed additional burdens on them that were not sufficiently offset by the potential financial savings.</p>" },
        D: { body: "<p>were less likely to believe that the green plan was truly cost-effective than were participants using either the Affect or Role Modes.</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is the best answer because it most logically completes the text's discussion of the influence of decision-making modes on consumers' choices of different electricity plans. The Calculation Mode describes choices based on minimizing financial costs and maximizing the decision-maker's convenience. Thus, if those using a Calculation Mode disfavor the green plan, it would be due to some financial or convenience burden the green plan imposes that the other doesn't. The text indicates that the green plan had a lower financial cost but was nonetheless rejected by participants using the Calculation Mode. It therefore follows that the green plan likely imposed a convenience burden that outweighed potential financial savings for these participants.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Inferences",
      difficulty: "Hard"
    }
  },
  {
    questionId: "70f512e7",
    externalId: "70f512e7",
    section: "Reading",
    prompt: "<p><strong>Suggestions for Improving a University</strong></p><p>[Graph showing: additive ~575, neither additive nor subtractive ~175, subtractive ~75, invalid ~375]</p><p>Gabrielle Adams and colleagues reviewed suggestions for improving a university that had been submitted to the university's president. They coded each suggestion as additive (the idea suggested adding something new to the university), subtractive (the idea suggested removing something from the university), neither additive nor subtractive, or invalid (the idea was not comprehensible). The data illustrated people's tendency to overlook the possibility of removing things to achieve improvements: ______</p><p>Which choice most effectively uses data in the graph to complete the statement?</p>",
    answer: {
      choices: {
        A: { body: "<p>around 175 suggestions were coded as neither additive nor subtractive, whereas around 575 suggestions were coded as additive.</p>" },
        B: { body: "<p>more than 350 suggestions were coded as invalid, whereas fewer than 100 suggestions were coded as subtractive.</p>" },
        C: { body: "<p>fewer than 100 suggestions were coded as subtractive, whereas more than 550 suggestions were coded as additive.</p>" },
        D: { body: "<p>around 575 suggestions were coded as additive, whereas around 175 suggestions were coded as subtractive.</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is the best answer. This choice shows that people suggested removing things to achieve improvements a lot less often than they suggested adding things, which supports the claim that people tend not to think of removing things as a likely way to improve the university.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Medium"
    }
  },
  {
    questionId: "f4bfb306",
    externalId: "f4bfb306",
    section: "Reading",
    prompt: "<p>Researchers Suchithra Rajendran and Maximilian Popfinger modeled varying levels of passenger redistribution from short-haul flights (flights of 50 to 210 minutes, from takeoff to landing) to high-speed rail trips. Planes travel faster than trains, but air travel typically requires 3 hours of lead time for security, baggage handling, and boarding that rail travel doesn't, so short-haul routes take similar amounts of time by air and by rail. However, the model suggests that as rail passenger volumes approach current capacity limits, long lead times emerge. Therefore, for rail to remain a viable alternative to short-haul flights, ______</p><p>Which choice most logically completes the text?</p>",
    answer: {
      choices: {
        A: { body: "<p>rail systems should offer fewer long-haul routes and airlines should offer more long-haul routes.</p>" },
        B: { body: "<p>rail systems may need to schedule additional trains for these routes.</p>" },
        C: { body: "<p>security, baggage handling, and boarding procedures used by airlines may need to be implemented for rail systems.</p>" },
        D: { body: "<p>passengers who travel by rail for these routes will need to accept that lead times will be similar to those for air travel.</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is the best answer. Air travel usually requires much more \"lead time\" than train travel, so short flights end up taking the same amount of time as a train trip to the same destination. But train travel starts to need more \"lead time\" when the trains approach their capacity limits. This suggests that train companies should add more trains for these routes if they want to encourage travelers to take a train instead of a plane.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Inferences",
      difficulty: "Hard"
    }
  },
  {
    questionId: "11c970bc",
    externalId: "11c970bc",
    section: "Reading",
    prompt: "<p><strong>China's Imports by Type, 2000–2006</strong></p><p>[Graph showing ordinary imports, processing with assembly, and processing with inputs for years 2000, 2003, 2006]</p><p>A student is researching the Chinese government's 1992 shift to a market economy that emphasizes trade liberalization. One means of trade liberalization involves expanding from ordinary imports into an emphasis on processing imports, which have two types: processing with assembly (in which a firm obtains raw materials from a foreign trading partner without payment and sells the final goods to that partner, charging for assembly) and processing with inputs (in which a firm expends capital to buy raw materials from a trading partner, processes them into final goods, and sells those goods to whichever trading partner it chooses). The student asserts that while initial efforts at trade liberalization were shaped by Chinese firms' limited capital, this situation resolved during the 2000s.</p><p>Which choice best describes data from the graph that support the student's assertion?</p>",
    answer: {
      choices: {
        A: { body: "<p>Processing imports with inputs were greater than both ordinary imports and processing imports with assembly in 2006.</p>" },
        B: { body: "<p>From 2000 to 2006, processing imports with inputs rose much more sharply than processing imports with assembly did.</p>" },
        C: { body: "<p>From 2000 to 2006, neither processing imports with inputs nor processing imports with assembly were greater than ordinary imports.</p>" },
        D: { body: "<p>Processing imports with assembly were greater in 2006 than processing imports with inputs in 2000.</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is the best answer because it describes data from the graph that best support the student's assertion that initial efforts at trade liberalization in China were shaped by firms having limited capital and that this situation resolved during the 2000s. Because processing with inputs requires firms to pay for materials (expending capital) and processing with assembly doesn't, the sharper rise in processing imports with inputs suggests that Chinese firms' assets—and thus their ability to engage in that type of processing imports—were relatively limited in (and before) 2000 and then substantially increased from 2000 to 2006.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Hard"
    }
  },
  {
    questionId: "f37f0c11",
    externalId: "f37f0c11",
    section: "Reading",
    prompt: "<p>In a paper about p-i-n planar perovskite solar cells (one of several perovskite cell architectures designed to collect and store solar power), Lyndsey McMillon-Brown et al. describe a method for fabricating the cell's electronic transport layer (ETL) using a spray coating. Conventional ETL fabrication is accomplished using a solution of nanoparticles. The process can result in a loss of up to 80% of the solution, increasing the cost of manufacturing at scale—an issue that may be obviated by spray coating fabrication, which the researchers describe as \"highly reproducible, concise, and practical.\"</p><p>What does the text most strongly suggest about conventional ETL fabrication?</p>",
    answer: {
      choices: {
        A: { body: "<p>It is less suitable for manufacturing large volumes of planar p-i-n perovskite solar cells than an alternative fabrication method may be.</p>" },
        B: { body: "<p>It is more expensive when manufacturing at scale than are processes for fabricating ETLs used in other perovskite solar cell architectures.</p>" },
        C: { body: "<p>It typically entails a greater loss of nanoparticle solution than do other established approaches for ETL fabrication.</p>" },
        D: { body: "<p>It is somewhat imprecise and therefore limits the potential effectiveness of p-i-n planar perovskite solar cells at capturing and storing solar power.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer. Conventional solar cell fabrication increases \"the cost of manufacturing at scale,\" but spray coating might get rid of that problem.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Central Ideas and Details",
      difficulty: "Hard"
    }
  },
  {
    questionId: "8a193615",
    externalId: "8a193615",
    section: "Reading",
    prompt: "<p>Jan Gimsa, Robert Sleigh, and Ulrike Gimsa have hypothesized that the sail-like structure running down the back of the dinosaur Spinosaurus aegyptiacus improved the animal's success in underwater pursuits of prey species capable of making quick, evasive movements. To evaluate their hypothesis, a second team of researchers constructed two battery-powered mechanical models of S. aegyptiacus, one with a sail and one without, and subjected the models to a series of identical tests in a water-filled tank.</p><p>Which finding from the model tests, if true, would most strongly support Gimsa and colleagues' hypothesis?</p>",
    answer: {
      choices: {
        A: { body: "<p>The model with a sail took significantly less time to complete a sharp turn while submerged than the model without a sail did.</p>" },
        B: { body: "<p>The model with a sail displaced significantly more water while submerged than the model without a sail did.</p>" },
        C: { body: "<p>The model with a sail had significantly less battery power remaining after completing the tests than the model without a sail did.</p>" },
        D: { body: "<p>The model with a sail took significantly longer to travel a specified distance while submerged than the model without a sail did.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer. This finding would most strongly support the hypothesis. The hypothesis is that the sail improved the dinosaur's ability to chase quick, evasive prey. This finding suggests that the sail helped the dinosaur make sharp turns more quickly, which supports that hypothesis.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Medium"
    }
  },
  {
    questionId: "40aa7b00",
    externalId: "40aa7b00",
    section: "Reading",
    prompt: "<p>Astronomers investigated the Arabia Terra region of Mars because it appears to contain irregularly shaped craters that may have been caused by massive volcanic explosions. In their investigations of Arabia Terra, the researchers found remnants of ash deposits in an amount and thickness that would result from a massive volcanic eruption. However, erosion and past resurfacing events could have modified the surface of the planet. Therefore, ______</p><p>Which choice most logically completes the text?</p>",
    answer: {
      choices: {
        A: { body: "<p>the current makeup of the Arabia Terra region might not accurately reflect the volcanic activity of Mars's past.</p>" },
        B: { body: "<p>eruptions from Mars's volcanoes were likely not as massive as astronomers previously believed.</p>" },
        C: { body: "<p>ash was most likely expelled from multiple different volcanoes on Mars's surface.</p>" },
        D: { body: "<p>the craters found in the Arabia Terra region were necessarily created by events other than volcanic eruptions.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer because it presents the conclusion that most logically follows from the text's discussion of the Arabia Terra region of Mars. The text suggests that current conditions on Mars's surface are not necessarily a reliable guide to past events—some signs of past events could have been transformed or erased entirely—and thus the current makeup of Arabia Terra may not accurately reflect past volcanic activity.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Inferences",
      difficulty: "Medium"
    }
  },
  {
    questionId: "fd29f9e5",
    externalId: "fd29f9e5",
    section: "Reading",
    prompt: "<p>Archaeologist Christiana Kohler and her team excavated the Egyptian tomb of Queen Merneith, the wife of a First Dynasty pharaoh. Some scholars claim that she also ruled Egypt on her own and was actually the first female pharaoh. The team found a tablet in Merneith's tomb with writing suggesting that she was in charge of the country's treasury and other central offices. Whether Merneith was a pharaoh or not, this discovery supports the idea that Merneith likely ______</p><p>Which choice most logically completes the text?</p>",
    answer: {
      choices: {
        A: { body: "<p>had an important role in Egypt's government.</p>" },
        B: { body: "<p>lived after rather than before the First Dynasty of Egypt.</p>" },
        C: { body: "<p>traveled beyond Egypt's borders often.</p>" },
        D: { body: "<p>created a new form of writing in Egypt.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer because it most logically completes the text's discussion of the evidence found in Queen Merneith's tomb. The text states that a tablet discovered in her tomb suggests she \"was in charge of the country's treasury and other central offices,\" which supports the idea that she had an important role in Egypt's government.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Inferences",
      difficulty: "Easy"
    }
  },
  {
    questionId: "3d89704b",
    externalId: "3d89704b",
    section: "Reading",
    prompt: "<p>One recognized social norm of gift giving is that the time spent obtaining a gift will be viewed as a reflection of the gift's thoughtfulness. Marketing experts Farnoush Reshadi, Julian Givi, and Gopal Das addressed this view in their studies of norms specifically surrounding the giving of gift cards, noting that while recipients tend to view digital gift cards (which can be purchased online from anywhere and often can be redeemed online as well) as superior to physical gift cards (which sometimes must be purchased in person and may only be redeemable in person) in terms of usage, 94.8 percent of participants surveyed indicated that it is more socially acceptable to give a physical gift card to a recipient. This finding suggests that ______</p><p>Which choice most logically completes the text?</p>",
    answer: {
      choices: {
        A: { body: "<p>gift givers likely overestimate the amount of effort required to use digital gift cards and thus mistakenly assume gift recipients will view them as less desirable than physical gift cards.</p>" },
        B: { body: "<p>physical gift cards are likely preferred by gift recipients because the tangible nature of those cards offers a greater psychological sense of ownership than digital gift cards do.</p>" },
        C: { body: "<p>physical gift cards are likely less desirable to gift recipients than digital gift cards are because of the perception that physical gift cards require unnecessary effort to obtain.</p>" },
        D: { body: "<p>gift givers likely perceive digital gift cards as requiring relatively low effort to obtain and thus wrongly assume gift recipients will appreciate them less than they do physical gift cards.</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is the best answer because it most logically completes the text's discussion of perceptions of digital versus physical gift cards. Given the text's initial premise that gift-giving norms equate the thoughtfulness of a gift with the effort involved in acquiring that gift, it is reasonable to infer that people perceive digital gift cards as requiring less effort to obtain and thus assume recipients will appreciate them less, even though recipients actually prefer gift cards in the more usable digital format.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Inferences",
      difficulty: "Hard"
    }
  },
  {
    questionId: "37858087",
    externalId: "37858087",
    section: "Reading",
    prompt: "<p><strong>Dated Ages of Lunar Samples from Select Missions</strong></p><table><tr><th>Mission name</th><th>Year</th><th>Landing site</th><th>Approximate age of lunar samples (billions of years)</th></tr><tr><td>Apollo 11</td><td>1969</td><td>Mare Tranquillitatis</td><td>3.6</td></tr><tr><td>Apollo 15</td><td>1971</td><td>Mare Imbrium</td><td>3.3</td></tr><tr><td>Apollo 17</td><td>1972</td><td>Mare Serenitatis</td><td>3.8</td></tr><tr><td>Chang'e 5</td><td>2020</td><td>Oceanus Procellarum</td><td>2.0</td></tr></table><p>The Apollo program missions were spaceflights to the moon led by the United States during the 1960s and 1970s during which astronauts collected some samples of the moon's surface. More recently, China launched the Chang'e 5 mission, which returned additional lunar surface samples. Researchers have analyzed and dated each of the samples, concluding that the lunar samples collected during the Chang'e 5 mission are significant because ______</p><p>Which choice most effectively uses data from the table to complete the claim?</p>",
    answer: {
      choices: {
        A: { body: "<p>they are much younger than the samples brought back from any of the Apollo missions.</p>" },
        B: { body: "<p>they were collected from the same landing site as the Apollo 11 mission.</p>" },
        C: { body: "<p>they are closest in age to the samples brought back by the Apollo 17 mission.</p>" },
        D: { body: "<p>they helped confirm the predicted ages of the lunar samples from the Apollo missions.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer because it effectively uses data from the table to complete the claim about the significance of the Chang'e 5 lunar samples. The Chang'e 5 samples are said to be approximately 2 billion years old, while the Apollo samples are each said to be more than 3 billion years old. In other words, based on the data in the table, the Chang'e 5 samples are much younger than those from the Apollo missions.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Medium"
    }
  },
  {
    questionId: "88a141f3",
    externalId: "88a141f3",
    section: "Reading",
    prompt: "<p>In the early nineteenth century, some Euro-American farmers in the northeastern United States used agricultural techniques developed by the Haudenosaunee (Iroquois) people centuries earlier, but it seems that few of those farmers had actually seen Haudenosaunee farms firsthand. Barring the possibility of several farmers of the same era independently developing techniques that the Haudenosaunee people had already invented, these facts most strongly suggest that ______</p><p>Which choice most logically completes the text?</p>",
    answer: {
      choices: {
        A: { body: "<p>those farmers learned the techniques from other people who were more directly influenced by Haudenosaunee practices.</p>" },
        B: { body: "<p>the crops typically cultivated by Euro-American farmers in the northeastern United States were not well suited to Haudenosaunee farming techniques.</p>" },
        C: { body: "<p>Haudenosaunee farming techniques were widely used in regions outside the northeastern United States.</p>" },
        D: { body: "<p>Euro-American farmers only began to recognize the benefits of Haudenosaunee farming techniques late in the nineteenth century.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer because it most logically completes the text's discussion of Euro-American farmers' use of Haudenosaunee agricultural techniques. If Euro-American farmers didn't learn these techniques from direct observation of Haudenosaunee practices and didn't invent the techniques independently, then the most logical explanation is that they learned the techniques from other people who were more directly influenced by Haudenosaunee practices than the farmers themselves were.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Inferences",
      difficulty: "Hard"
    }
  },
  {
    questionId: "fb2bb280",
    externalId: "fb2bb280",
    section: "Reading",
    prompt: "<p><strong>Simulated Change in Annual Aquifer Input and Irrigation Output if Precipitation Concentration Increases as Climate Models Predict</strong></p><table><tr><th>Baseline concentration of annual precipitation</th><th>% change in water entering aquifers</th><th>% change in surface water used for irrigation</th><th>% change in groundwater used for irrigation</th></tr><tr><td>Precipitation is currently somewhat concentrated</td><td>4.9</td><td>0.4</td><td>0.9</td></tr><tr><td>Precipitation is currently evenly distributed</td><td>11.0</td><td>9.0</td><td>7.9</td></tr></table><p>Some climate models for the western United States predict that while total annual precipitation may remain unchanged from the present level, precipitation will become concentrated into fewer but more intense rain and snow events. University of Texas climate scientist Geeta Persad and her colleagues simulated how the amount of water entering aquifers and the amount being used for irrigation purposes would change if this were to occur. Persad and her colleagues concluded that concentration of precipitation into fewer events would result in a higher number of dry days, triggering more irrigation, but that this change in irrigation output is highly sensitive to the baseline concentration of precipitation that currently exists in an area.</p><p>Which choice best describes data from the table that support Persad and her colleagues' conclusion?</p>",
    answer: {
      choices: {
        A: { body: "<p>If baseline precipitation is somewhat concentrated, the amount of water being used for irrigation will increase 0.4% for surface water and 0.9% for groundwater, whereas the amount of water entering aquifers will increase 11.0% if baseline precipitation is evenly distributed.</p>" },
        B: { body: "<p>If baseline precipitation is somewhat concentrated, water use for irrigation will increase only slightly, whereas it will increase 9.0% for surface water and 7.9% for groundwater if baseline precipitation is evenly distributed.</p>" },
        C: { body: "<p>If baseline precipitation is somewhat concentrated, the amount of water entering aquifers will increase 4.9%, while the amount being used for irrigation will increase 0.4% for surface water and 0.9% for groundwater.</p>" },
        D: { body: "<p>If baseline precipitation is somewhat concentrated, water use for irrigation will decline by a small amount, whereas it will increase 11.0% for surface water and 9.0% for groundwater if baseline precipitation is evenly distributed.</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is the best answer because it describes data from the table that support Persad and her colleagues' conclusion. The table shows that if baseline precipitation is somewhat concentrated, water use for irrigation will increase only slightly, whereas if baseline precipitation is evenly distributed, water use for irrigation will increase much more—9.0% for surface water and 7.9% for groundwater. This difference illustrates the researchers' conclusion that the amount of additional water needed for irrigation will vary greatly depending on how concentrated or spread out the annual precipitation in an area already is.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Hard"
    }
  },
  {
    questionId: "77172c4d",
    externalId: "77172c4d",
    section: "Reading",
    prompt: "<p><strong>Voters' Political Orientation, Level of Political Information, and Probability of Voting</strong></p><p>[Graph showing probability of voting (%) vs political orientation (1=strong Democrat/liberal to 7=strong Republican/conservative) for low information and high information voters]</p><p>Economists Kerwin Kofi Charles and Melvin Stephens Jr. investigated a variety of factors that influence voter turnout in the United States. Using survey data that revealed whether respondents voted in national elections and how knowledgeable respondents are about politics, Charles and Stephens claim that the likelihood of voting is driven in part by potential voters' confidence in their assessments of candidates—essentially, the more informed voters are about politics, the more confident they are at evaluating whether candidates share their views, and thus the more likely they are to vote.</p><p>Which choice best describes data in the graph that support Charles and Stephens's claim?</p>",
    answer: {
      choices: {
        A: { body: "<p>At each point on the political orientation scale, high-information voters were more likely than low-information voters to vote.</p>" },
        B: { body: "<p>Only low-information voters who identify as independents had a voting probability below 50%.</p>" },
        C: { body: "<p>The closer that low-information voters are to the ends of the political orientation scale, the more likely they were to vote.</p>" },
        D: { body: "<p>High-information voters were more likely to identify as strong Democrats or strong Republicans than low-information voters were.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer because it uses data from the graph to effectively support Charles and Stephens's claim about how level of information affects voters. Charles and Stephens claim that \"the more informed voters are about politics…the more likely they are to vote.\" This statement correctly asserts that the graph shows a higher probability of voting for high-information voters than for low-information voters at each of the seven political orientations.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Medium"
    }
  },
  {
    questionId: "f5251eec",
    externalId: "f5251eec",
    section: "Reading",
    prompt: "<p>Under normal atmospheric pressure at Earth's surface, water molecules form a tetrahedral network stabilized by hydrogen bonds between adjacent molecules. Extreme high pressure, such as can be found in deep ocean waters, destabilizes these bonds and compresses water's structure, allowing water molecules within organisms to permeate proteins and impede crucial biological functions; yet deep-sea organisms known as piezophiles have adapted to extreme pressure. Studies have found a positive correlation between the depths that various piezophiles inhabit and concentrations of a compound called trimethylamine N-oxide (TMAO) in their muscle tissues, which has led a team of researchers to hypothesize that TMAO reduces water's compressibility.</p><p>Which finding, if true, would most directly support the researchers' hypothesis?</p>",
    answer: {
      choices: {
        A: { body: "<p>Water molecules are found to be impervious to TMAO even when the water molecules' tetrahedral configuration has been distorted by high pressure.</p>" },
        B: { body: "<p>Examination of TMAO's molecular structure shows that TMAO molecules retain their shape even as pressure increases.</p>" },
        C: { body: "<p>A positive correlation is found between concentrations of TMAO and the rate at which water's molecular structure compresses as pressure increases.</p>" },
        D: { body: "<p>Analysis of water's molecular structure under high pressure reveals that hydrogen bonds are more stable when TMAO is present than when it is not.</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is the best answer because it presents a finding that, if true, would support the researchers' hypothesis that TMAO reduces water's compressibility. Because this hypothesis links TMAO levels with reduced compressibility of water's tetrahedral molecular structure, a finding that TMAO helps maintain the hydrogen bonds between water molecules under high pressure would strongly support that hypothesis.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Hard"
    }
  },
  {
    questionId: "d86f2bc0",
    externalId: "d86f2bc0",
    section: "Reading",
    prompt: "<p><strong>Housing Starts in the US, January–April 2022 (in thousands)</strong></p><table><tr><th>Month</th><th>Housing starts</th></tr><tr><td>January</td><td>1,669</td></tr><tr><td>February</td><td>1,771</td></tr><tr><td>March</td><td>1,713</td></tr><tr><td>April</td><td>1,803</td></tr></table><p>When construction of a single-family house begins, it is called a housing start. In the first four months of 2022, the highest number of housing starts in the United States was in ______</p><p>Which choice most effectively uses data from the table to complete the statement?</p>",
    answer: {
      choices: {
        A: { body: "<p>April.</p>" },
        B: { body: "<p>March.</p>" },
        C: { body: "<p>January.</p>" },
        D: { body: "<p>February.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer because it effectively uses data from the table to complete the statement, identifying the month in which the United States had the highest number of housing starts in 2022. According to the table, the highest number of housing starts was 1,803 thousand, which occurred in April.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Easy"
    }
  },
  {
    questionId: "828e9662",
    externalId: "828e9662",
    section: "Reading",
    prompt: "<p>While attending school in New York City in the 1980s, Okwui Enwezor encountered few works by African artists in exhibitions, despite New York's reputation as one of the best places to view contemporary art from around the world. According to an arts journalist, later in his career as a renowned curator and art historian, Enwezor sought to remedy this deficiency, not by focusing solely on modern African artists, but by showing how their work fits into the larger context of global modern art and art history.</p><p>Which finding, if true, would most directly support the journalist's claim?</p>",
    answer: {
      choices: {
        A: { body: "<p>As curator of the Haus der Kunst in Munich, Germany, Enwezor organized a retrospective of Ghanaian sculptor El Anatsui's work entitled El Anatsui: Triumphant Scale, one of the largest art exhibitions devoted to a Black artist in Europe's history.</p>" },
        B: { body: "<p>In the exhibition Postwar: Art Between the Pacific and the Atlantic, 1945–1965, Enwezor and cocurator Katy Siegel brought works by African artists such as Malangatana Ngwenya together with pieces by major figures from other countries, like US artist Andy Warhol and Mexico's David Siqueiros.</p>" },
        C: { body: "<p>Enwezor's work as curator of the 2001 exhibition The Short Century: Independence and Liberation Movements in Africa, 1945–1994 showed how African movements for independence from European colonial powers following the Second World War profoundly influenced work by African artists of the period, such as Kamala Ibrahim Ishaq and Thomas Mukarobgwa.</p>" },
        D: { body: "<p>Enwezor organized the exhibition In/sight: African Photographers, 1940 to the Present not to emphasize a particular aesthetic trend but to demonstrate the broad range of ways in which African artists have approached the medium of photography.</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is the best answer because it presents a finding that, if true, would most directly support the arts journalist's claim about Enwezor's work as a curator and art historian. The description of Postwar: Art Between the Pacific and the Atlantic, 1945–1965 indicates that Enwezor and Siegel's exhibition brought works by African artists together with works by artists from other countries, thus supporting the arts journalist's claim that Enwezor sought to show works by African artists in a context of global modern art and art history.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Hard"
    }
  },
  {
    questionId: "4eb8acac",
    externalId: "4eb8acac",
    section: "Reading",
    prompt: "<p>Male túngara frogs make complex calls to attract mates, but their calls also attract frog-biting midges, insects that feed on the frogs' blood. Researchers Ximena Bernal and Priyanka de Silva wondered if the calls alone are sufficient for midges to locate the frogs or if midges use carbon dioxide emitted by frogs as an additional cue to their prey's whereabouts, like mosquitoes do. In an experiment, the researchers placed two midge traps in a túngara frog breeding area. One trap played recordings of túngara frog calls and the other released carbon dioxide along with playing the calls. Bernal and de Silva concluded that carbon dioxide does not serve as an additional cue to frog-biting midges.</p><p>Which finding from the experiment, if true, would most directly support Bernal and de Silva's conclusion?</p>",
    answer: {
      choices: {
        A: { body: "<p>Only a small number of midges were found in the traps, though the majority were found in the trap that played calls and released carbon dioxide.</p>" },
        B: { body: "<p>Midges entered the trap that released carbon dioxide and played calls only during or immediately after periods of carbon dioxide release.</p>" },
        C: { body: "<p>More midges were found in the trap that only played calls than in the trap that played calls and released carbon dioxide.</p>" },
        D: { body: "<p>The trap that released carbon dioxide and played calls attracted few midges when carbon dioxide concentrations were low but attracted many midges when carbon dioxide concentrations were high.</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is the best answer because it presents a finding that, if true, would most directly support the researchers' conclusion that carbon dioxide does not serve as an additional cue to frog-biting midges regarding the location of male túngara frogs. If more midges were found in the researchers' trap that only played calls than in the trap that played calls and released carbon dioxide, it follows that the frog calls seem sufficient without the carbon dioxide cue.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Medium"
    }
  },
  {
    questionId: "9f901f94",
    externalId: "9f901f94",
    section: "Reading",
    prompt: "<p><strong>Ablation Rates for Three Elements in Cosmic Dust, by Dust Source</strong></p><table><tr><th>Element</th><th>SPC</th><th>AST</th><th>HTC</th><th>OCC</th></tr><tr><td>iron</td><td>20%</td><td>28%</td><td>90%</td><td>98%</td></tr><tr><td>potassium</td><td>44%</td><td>74%</td><td>97%</td><td>100%</td></tr><tr><td>sodium</td><td>45%</td><td>75%</td><td>99%</td><td>100%</td></tr></table><p>Earth's atmosphere is bombarded by cosmic dust originating from several sources: short-period comets (SPCs), particles from the asteroid belt (ASTs), Halley-type comets (HTCs), and Oort cloud comets (OCCs). Some of the dust's material vaporizes in the atmosphere in a process called ablation, and the faster the particles move, the higher the rate of ablation. Astrophysicist Juan Diego Carrillo-Sánchez led a team that calculated average ablation rates for elements in the dust (such as iron and potassium) and showed that material in slower-moving SPC or AST dust has a lower rate than the same material in faster-moving HTC or OCC dust. For example, whereas the average ablation rate for iron from AST dust is 28%, the average rate for ______</p><p>Which choice most effectively uses data from the table to complete the example?</p>",
    answer: {
      choices: {
        A: { body: "<p>iron from SPC dust is 20%.</p>" },
        B: { body: "<p>sodium from OCC dust is 100%.</p>" },
        C: { body: "<p>iron from HTC dust is 90%.</p>" },
        D: { body: "<p>sodium from AST dust is 75%.</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is the best answer because it most effectively completes the example regarding the ablation rate of iron. The text says that the ablation rate for a given element in slower-moving SPC and AST dust was lower than the ablation rate for that same element in faster-moving HTC or OCC dust. The text then presents the first part of an example of this pattern, describing an ablation rate of 28% for iron in AST dust. The information that iron from HTC dust had an ablation rate of 90% is therefore the most effective way to complete this example—the comparison of a relatively low ablation rate for iron in slower-moving AST dust with a relatively high ablation rate for iron in faster-moving HTC dust illustrates the tendency of ablation rates for a given element to be lower in slower-moving dust than in faster-moving dust.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Hard"
    }
  },
  {
    questionId: "b23d9563",
    externalId: "b23d9563",
    section: "Reading",
    prompt: "<p>\"We Are Marching\" is a 1921 poem by Carrie Law Morgan Figgs. In the poem, the speaker predicts future success: ______</p><p>Which quotation from \"We Are Marching\" most effectively illustrates the claim?</p>",
    answer: {
      choices: {
        A: { body: "<p>\"Can't you hear the sound of feet?\"</p>" },
        B: { body: "<p>\"You who are out just get in line.\"</p>" },
        C: { body: "<p>\"We have answered duty's call.\"</p>" },
        D: { body: "<p>\"We shall never know defeat.\"</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is the best answer because it most effectively illustrates the claim that the speaker in the poem \"We Are Marching\" predicts future success. To say that someone will \"never know\" an experience—like defeat, or being unsuccessful—is to indicate that they will never personally have that experience. Thus, when the speaker says that the marching group \"shall never know defeat,\" the speaker is predicting that the group will experience only success in the future.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Easy"
    }
  },
  {
    questionId: "c9bdb464",
    externalId: "c9bdb464",
    section: "Reading",
    prompt: "<p>Linguist Deborah Tannen has cautioned against framing contentious issues in terms of two highly competitive perspectives, such as pro versus con. According to Tannen, this debate-driven approach can strip issues of their complexity and, when used in front of an audience, can be less informative than the presentation of multiple perspectives in a noncompetitive format. To test Tannen's hypothesis, students conducted a study in which they showed participants one of three different versions of local news commentary about the same issue. Each version featured a debate between two commentators with opposing views, a panel of three commentators with various views, or a single commentator.</p><p>Which finding from the students' study, if true, would most strongly support Tannen's hypothesis?</p>",
    answer: {
      choices: {
        A: { body: "<p>On average, participants perceived commentators in the debate as more knowledgeable about the issue than commentators in the panel.</p>" },
        B: { body: "<p>On average, participants perceived commentators in the panel as more knowledgeable about the issue than the single commentator.</p>" },
        C: { body: "<p>On average, participants who watched the panel correctly answered more questions about the issue than those who watched the debate or the single commentator did.</p>" },
        D: { body: "<p>On average, participants who watched the single commentator correctly answered more questions about the issue than those who watched the debate did.</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is the best answer because it presents the finding that, if true, would most strongly support Tannen's hypothesis. According to the text, Tannen's hypothesis is that multiple perspectives presented in a noncompetitive format is more informative than a debate between opposing viewpoints is. If participants who saw a panel of three commentators with various views about an issue answered more questions about the issue correctly than did participants who saw a debate, that would support Tannen's hypothesis since it would show that participants who heard multiple varied perspectives were better informed than were participants who heard a debate between opposing viewpoints.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Hard"
    }
  },
  {
    questionId: "cb35e8d6",
    externalId: "cb35e8d6",
    section: "Reading",
    prompt: "<p>Ochre sea stars live in tidal pools along the shoreline of the Pacific Ocean. At night, they move to higher shore levels in search of prey. But scientists Corey Garza and Carlos Robles noticed that ochre sea stars stayed at lower levels at night after heavy rains. Garza and Robles hypothesized that a layer of fresh water formed by rainfall was a barrier to the sea stars. To test their hypothesis, the scientists did an experiment. They placed some sea stars in a climbable tank of seawater and other sea stars in a similar tank of seawater with a layer of fresh water on top. Then, the scientists watched the sea stars' behavior at night.</p><p>Which finding from the experiment, if true, would most directly support Garza and Robles's hypothesis?</p>",
    answer: {
      choices: {
        A: { body: "<p>None of the sea stars climbed to the tops of the tanks, but sea stars in the tank with only seawater moved around the bottom of the tank more than sea stars in the other tank did.</p>" },
        B: { body: "<p>Sea stars in the tank with only seawater climbed to the top of the tank, but sea stars in the other tank stopped climbing just below the layer of fresh water.</p>" },
        C: { body: "<p>Both groups of sea stars climbed to the tops of the tanks, but sea stars in the tank with only seawater climbed more slowly than sea stars in the other tank did.</p>" },
        D: { body: "<p>Sea stars in the tank with only seawater mostly stayed near the bottom of the tank, but sea stars in the other tank climbed into the layer of fresh water.</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is the best answer because it presents a finding that, if true, would support Garza and Robles's hypothesis that a layer of fresh water forms a barrier to ochre sea stars. If the sea stars climbed to the top of the tank with only seawater but stopped climbing just below the layer of fresh water in the other tank, that would suggest that fresh water does indeed serve as a barrier to the sea stars, thereby supporting Garza and Robles's hypothesis.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Easy"
    }
  },
  {
    questionId: "e7b2ca56",
    externalId: "e7b2ca56",
    section: "Reading",
    prompt: "<p>Optical tweezers are specialized scientific tools—particularly useful in biology and medicine—that use high-powered beams of light to trap and manipulate minuscule particles for study. Use of the tool has led to several scientific and medical breakthroughs over the last few decades, but the particles are often under prolonged exposure to the intense heat of the light beams. To overcome the risk of overheating, and thereby damage, researchers sometimes attach nano-sized glass beads to particles, allowing the light to focus on the beads instead of the particles.</p><p>Based on the text, what is one advantage of attaching glass beads to particles when using optical tweezers?</p>",
    answer: {
      choices: {
        A: { body: "<p>It decreases the time it takes for the optical tweezers to locate and capture the particles.</p>" },
        B: { body: "<p>It facilitates the maneuvering of particles without directly heating the particles themselves.</p>" },
        C: { body: "<p>It allows researchers to use weaker light beams to manipulate particles.</p>" },
        D: { body: "<p>It adds a material to which particles can transfer any heat absorbed from the optical tweezers' light beam.</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is the best answer. The text says that the glass beads get the \"focus\" of the light beams so that the particles don't overheat. From this, we can infer that the beads allow the particles to be manipulated without being directly heated by the light beams.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Central Ideas and Details",
      difficulty: "Hard"
    }
  },
  {
    questionId: "0ee7dfb6",
    externalId: "0ee7dfb6",
    section: "Reading",
    prompt: "<p>Laura Mulvey has theorized that in narrative film, shots issuing from a protagonist's point of view compel viewers to identify with the character. Such identification is heightened by \"invisible editing,\" or editing so inconspicuous that it renders cuts between shots almost unnoticeable. Conversely, Mulvey proposes that conspicuous editing or an absence of point-of-view shots would induce a more critical stance toward a protagonist. Consider, for example, the attic scene in Alfred Hitchcock's The Birds, a conspicuously edited sequence of tens of shots, few of which correspond to the protagonist's point of view. According to Mulvey's logic, this scene should affect viewers by ______</p><p>Which choice most logically completes the text?</p>",
    answer: {
      choices: {
        A: { body: "<p>obscuring their awareness of the high degree of artifice involved in constructing the montage.</p>" },
        B: { body: "<p>lessening their identification with the protagonist, if not alienating them from the character altogether.</p>" },
        C: { body: "<p>compelling them to identify with the film's director, whose proxy is the camera, and not with the protagonist.</p>" },
        D: { body: "<p>diverting their attention away from the film's content and toward its stylistic attributes.</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is the best answer. We're told that point-of-view shots and \"invisible editing\" make audiences identify with a character. We're also told that obvious editing and a lack of point-of-view shots have the opposite effect. Since the sequence in The Birds falls into this second category, it should have the effect of reducing the audience's connection with the protagonist.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Inferences",
      difficulty: "Hard"
    }
  },
  {
    questionId: "260f8d93",
    externalId: "260f8d93",
    section: "Reading",
    prompt: "<p>Some astronomers searching for extraterrestrial life have proposed that atmospheric NH₃ (ammonia) can serve as a biosignature gas—an indication that a planet harbors life. Jingcheng Huang, Sara Seager, and colleagues evaluated this possibility, finding that on rocky planets, atmospheric NH₃ likely couldn't reach detectably high levels in the absence of biological activity. But the team also found that on so-called mini-Neptunes—gas planets smaller than Neptune but with atmospheres similar to Neptune's—atmospheric pressure and temperature can be high enough to produce atmospheric NH₃.</p><p>Based on the text, Huang, Seager, and colleagues would most likely agree with which statement about atmospheric NH₃?</p>",
    answer: {
      choices: {
        A: { body: "<p>Its presence is more likely to indicate that a planet is a mini-Neptune than that the planet is a rocky planet that could support life.</p>" },
        B: { body: "<p>Its absence from a planet that's not a mini-Neptune indicates that the planet probably doesn't have life.</p>" },
        C: { body: "<p>It should be treated as a biosignature gas if detected in the atmosphere of a rocky planet but not if detected in the atmosphere of a mini-Neptune.</p>" },
        D: { body: "<p>It doesn't reliably reach high enough concentrations in the atmospheres of rocky planets or mini-Neptunes to be treated as a biosignature gas.</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is the best answer because it states a conclusion the researchers likely agree with, given the details in the text. The researchers found that rocky planets would be unlikely to reach \"detectably high levels\" of NH₃ without biological activity, which would support the proposal of NH₃ serving as a biosignature gas. However, the text also states that mini-Neptune planets can produce NH₃ in the absence of biological activity. Thus, detectable levels of NH₃ in the atmospheres of rocky planets could constitute a biosignature, but that is not the case for mini-Neptune planets.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Central Ideas and Details",
      difficulty: "Hard"
    }
  },
  {
    questionId: "870c7581",
    externalId: "870c7581",
    section: "Reading",
    prompt: "<p>One theory behind human bipedalism speculates that it originated in a mostly ground-based ancestor that practiced four-legged \"knuckle-walking,\" like chimpanzees and gorillas do today, and eventually evolved into moving upright on two legs. But recently, researchers observed orangutans, another relative of humans, standing on two legs on tree branches and using their arms for balance while they reached for fruits. These observations may suggest that ______</p><p>Which choice most logically completes the text?</p>",
    answer: {
      choices: {
        A: { body: "<p>bipedalism evolved because it was advantageous to a tree-dwelling ancestor of humans.</p>" },
        B: { body: "<p>bipedalism must have evolved simultaneously with knuckle-walking and tree-climbing.</p>" },
        C: { body: "<p>moving between the ground and the trees would have been difficult without bipedalism.</p>" },
        D: { body: "<p>a knuckle-walking human ancestor could have easily moved bipedally in trees.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer because it most logically completes the text's discussion of the evolution of bipedalism in humans. The finding that orangutans, also a relative of humans, sometimes stand on two legs in trees while using their arms to balance and reach for fruits suggests another possible explanation: perhaps a tree-dwelling ancestor of humans began moving on two legs because it offered an advantage, such as access to certain foods.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Inferences",
      difficulty: "Hard"
    }
  },
  {
    questionId: "fcc7687a",
    externalId: "fcc7687a",
    section: "Reading",
    prompt: "<p>The following text is Vita Sackville-West's circa 1920 poem \"Evening.\" Spars are ships' masts, moorings are ropes that hold docked ships in place, and a riding-light is a light that a ship shines when it is anchored.</p><p>When little lights in little ports come out,<br/>Quivering down through water with the stars,<br/>And all the fishing fleet of slender spars<br/>Range at their moorings, veer with tide about;</p><p>When race of wind is stilled and sails are furled,<br/>And underneath our single riding-light<br/>The curve of black-ribbed deck gleams palely white,<br/>And slumbrous waters pool a slumbrous world;</p><p>—Then, and then only, have I thought how sweet<br/>Old age might sink upon a windy youth,<br/>Quiet beneath the riding-light of truth,<br/>Weathered through storms, and gracious in retreat.</p><p>Which choice best states the main idea of the text?</p>",
    answer: {
      choices: {
        A: { body: "<p>The tranquility of a port in the evening can incline a person to appreciate the stillness of old age.</p>" },
        B: { body: "<p>The difficulty of bringing a ship into port is apt training for dealing with the types of struggles encountered in old age.</p>" },
        C: { body: "<p>A person who leads a long life that is varied and active may find it difficult to stay in a calm place.</p>" },
        D: { body: "<p>The contrast between the peacefulness of a port at night and its activity during the day reflects the contrast between the calm of old age and the vibrancy of youth.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer because it best states the main idea of the text. The speaker describes an evening scene observed from a boat and emphasizes the calmness of the scene. The speaker then indicates that the calmness prompts thoughts of how old age might be \"sweet\" and \"quiet\" and \"gracious in retreat\" after \"a windy youth\" with \"storms.\" Thus, the main idea is that the tranquility of a port in the evening can lead a person to appreciate the potential stillness of old age.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Central Ideas and Details",
      difficulty: "Hard"
    }
  },
  {
    questionId: "5ff54c6e",
    externalId: "5ff54c6e",
    section: "Reading",
    prompt: "<p>The following text is adapted from Christina Rossetti's 1881 poem \"Monna Innominata 2.\"</p><p>I wish I could remember that first day,<br/> First hour, first moment of your meeting me,<br/> If bright or dim the season, it might be<br/>Summer or Winter for [all] I can say;<br/>So unrecorded did it slip away,<br/> So blind was I to see and to foresee,<br/> So dull to mark the budding of my tree<br/>That would not blossom yet for many a May.</p><p>Which choice best states the main idea of the text?</p>",
    answer: {
      choices: {
        A: { body: "<p>The speaker celebrates how the passage of time has strengthened a relationship that once seemed unimportant.</p>" },
        B: { body: "<p>Because the speaker did not anticipate how important a relationship would become, she cannot recall how the relationship began, which she regrets.</p>" },
        C: { body: "<p>As the anniversary of the beginning of an important relationship approaches, the speaker feels conflicted about how best to commemorate it.</p>" },
        D: { body: "<p>After years of neglecting a once valuable relationship, the speaker worries it may be too late for her to salvage the relationship.</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is the best answer. The speaker says that they wish they could remember when they first met someone, but they can't remember the meeting at all, because they didn't know at the time that the relationship would \"blossom\" later on.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Central Ideas and Details",
      difficulty: "Medium"
    }
  },
  {
    questionId: "a36910a5",
    externalId: "a36910a5",
    section: "Reading",
    prompt: "<p>The linguistic niche hypothesis (LNH) posits that the exotericity of languages (how prevalent non-native speakers are) and grammatical complexity are inversely related, which the LNH ascribes to attrition of complex grammatical rules as more non-native speakers adopt the language but fail to acquire those rules. Focusing on two characteristics that are positive indices of grammatical complexity, fusion (when new phonemes arise from the merger of previously distinct ones) and informativity (languages' capacity for meaningful variation), Olena Shcherbakova and colleagues conducted a quantitative analysis for more than 1,300 languages and claim the outcome is inconsistent with the LNH.</p><p>Which finding, if true, would most directly support Shcherbakova and colleagues' claim?</p>",
    answer: {
      choices: {
        A: { body: "<p>Shcherbakova and colleagues' analysis showed a slightly negative correlation between grammatical complexity and fusion and between grammatical complexity and informativity.</p>" },
        B: { body: "<p>Shcherbakova and colleagues' analysis showed a slightly negative correlation between grammatical complexity and exotericity.</p>" },
        C: { body: "<p>Shcherbakova and colleagues' analysis showed a slightly positive correlation between grammatical complexity and fusion.</p>" },
        D: { body: "<p>Shcherbakova and colleagues' analysis showed a slightly positive correlation between fusion and exotericity and between informativity and exotericity.</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is the best answer because it presents a finding that, if true, would support Shcherbakova and colleagues' claim that the outcome of their study is inconsistent with the linguistic niche hypothesis (LNH). If the researchers found a slightly positive correlation between fusion and exotericity and between informativity and exotericity—meaning that to some extent, grammatical complexity increases as the number of non-native speakers of a language increases—their outcome would not be consistent with the assumption that exotericity and grammatical complexity are inversely related (the LNH).</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Hard"
    }
  },
  {
    questionId: "890d9043",
    externalId: "890d9043",
    section: "Reading",
    prompt: "<p>Zines are small-scale, self-printed magazines. They have been around since the Black literary zine Fire!! was created in the 1920s. Since then, zines have appealed to creators looking for an inexpensive form of expression to share with a select audience. Zine creators often mix art with social commentary and challenge mainstream culture. At first, the internet appeared to replace the zine, but this old form persists. Today, there are enough zines in the United States to support annual zine festivals. This suggests that ______</p><p>Which choice most logically completes the text?</p>",
    answer: {
      choices: {
        A: { body: "<p>creators can reach a larger audience by posting online.</p>" },
        B: { body: "<p>zines are still a meaningful form of expression.</p>" },
        C: { body: "<p>creators can continue to explore new art forms.</p>" },
        D: { body: "<p>zines are good sources of mainstream culture.</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is the best answer because it most logically follows from the text's point about zines today. The text describes zines as a form of expression that goes back to the 1920s and asserts that \"this old form persists.\" The text then indicates that multiple zines exist in the US today and that they are popular enough to support annual festivals, a point that suggests that people continue to view zines as a meaningful form of expression.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Inferences",
      difficulty: "Medium"
    }
  },
  {
    questionId: "75b8b0d2",
    externalId: "75b8b0d2",
    section: "Reading",
    prompt: "<p>Almost all works of fiction contain references to the progression of time, including the time of day when events in a story take place. In a 2020 study, Allen Kim, Charuta Pethe, and Steven Skiena claim that an observable pattern in such references reflects a shift in human behavior prompted by the spread of electric lighting in the late nineteenth century. The researchers drew this conclusion from an analysis of more than 50,000 novels spanning many centuries and cultures, using software to recognize and tally both specific time references—that is, clock phrases, such as 7 a.m. or 2:30 p.m.—and implied ones, such as mentions of meals typically associated with a particular time of day.</p><p>Which finding from the study, if true, would most directly support the researchers' conclusion?</p>",
    answer: {
      choices: {
        A: { body: "<p>Novels published after the year 1800 include the clock phrase 10 a.m. less often than novels published before the year 1800 do.</p>" },
        B: { body: "<p>Novels published after 1880 contain significantly more references to activities occurring after 10 p.m. than do novels from earlier periods.</p>" },
        C: { body: "<p>Among novels published in the nineteenth century, implied time references become steadily more common than clock phrases as publication dates approach 1900.</p>" },
        D: { body: "<p>The time references of noon (12 p.m.) and midnight (12 a.m.) are used with roughly the same frequency in the novels.</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is the best answer because it presents a finding that, if true, would most directly support the researchers' conclusion that an observable pattern in time references in novels reflects a shift in human behavior prompted by the spread of electric lighting in the late nineteenth century. If novels published after 1880 contain significantly more references to activities occurring after 10 p.m. than novels from earlier periods do, this would suggest a change in human behavior and daily routines enabled by the availability of electric lighting.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Hard"
    }
  },
  {
    questionId: "fe1dff2c",
    externalId: "fe1dff2c",
    section: "Reading",
    prompt: "<p>Political scientists who favor the traditional view of voter behavior claim that voting in an election does not change a voter's attitude toward the candidates in that election. Focusing on each US presidential election from 1976 to 1996, Ebonya Washington and Sendhil Mullainathan tested this claim by distinguishing between subjects who had just become old enough to vote (around half of whom actually voted) and otherwise similar subjects who were slightly too young to vote (and thus none of whom voted). Washington and Mullainathan compared the attitudes of the groups of subjects toward the winning candidate two years after each election.</p><p>Which finding from Washington and Mullainathan's study, if true, would most directly weaken the claim made by people who favor the traditional view of voter behavior?</p>",
    answer: {
      choices: {
        A: { body: "<p>Subjects' attitudes toward the winning candidate two years after a given election were strongly predicted by subjects' general political orientation, regardless of whether subjects were old enough to vote at the time of the election.</p>" },
        B: { body: "<p>Subjects who were not old enough to vote in a given election held significantly more positive attitudes towards the winning candidate two years later than they held at the time of the election.</p>" },
        C: { body: "<p>Subjects who voted in a given election held significantly more polarized attitudes toward the winning candidate two years later than did subjects who were not old enough to vote in that election.</p>" },
        D: { body: "<p>Two years after a given election, subjects who voted and subjects who were not old enough to vote were significantly more likely to express negative attitudes than positive attitudes toward the winning candidate in that election.</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is the best answer because it presents a finding that, if true, would weaken the claim made by people who favor the traditional view of voter behavior. According to the text, people who favor that view believe that voting in an election doesn't change a voter's attitude toward the candidates in that election. If Washington and Mullainathan found that two years after an election, attitudes toward the winning candidate were significantly more polarized among subjects who had voted than among subjects who had been too young to vote, that would suggest that the act of voting did have an effect on the voters' attitudes toward the candidates, which would undermine the claim that voting doesn't change voters' attitudes.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Hard"
    }
  },
  {
    questionId: "f0953df3",
    externalId: "f0953df3",
    section: "Reading",
    prompt: "<p>\"Odalie\" is an 1899 short story by Alice Dunbar-Nelson. In the story, a young woman named Odalie attends the annual Mardi Gras carnival in New Orleans, where she lives with her guardian Tante Louise. Dunbar-Nelson portrays Odalie as eager to escape the monotony of her everyday life: ______</p><p>Which quotation from \"Odalie\" most effectively illustrates the claim?</p>",
    answer: {
      choices: {
        A: { body: "<p>\"Mardi Gras was a tiresome day, after all, she sighed, and Tante Louise agreed with her for once.\"</p>" },
        B: { body: "<p>\"In the old French house on Royal Street, with its quaint windows and Spanish courtyard green and cool, and made musical by the plashing of the fountain and the trill of caged birds, lived Odalie in convent-like seclusion.\"</p>" },
        C: { body: "<p>\"When one is shut up in a great French house with a grim sleepy tante and no companions of one's own age, life becomes a dull thing, and one is ready for any new sensation.\"</p>" },
        D: { body: "<p>\"It was Mardi Gras day at last, and early through her window Odalie could hear the jingle of folly bells on the [participants'] costumes, the tinkle of music, and the echoing strains of songs.\"</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is the best answer because it most effectively uses a quotation from \"Odalie\" to illustrate the claim that Odalie is eager to escape the monotony, or tedious lack of variety, of her everyday life. In the quotation, Odalie describes feeling \"shut up\" and complains that she has \"no companions\" except for her \"sleepy tante.\" Odalie goes on to say that, as a result, her life is \"dull\" and she is \"ready for any new sensation,\" meaning she wants a change.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Medium"
    }
  },
  {
    questionId: "b2e55b8a",
    externalId: "b2e55b8a",
    section: "Reading",
    prompt: "<p>To understand how Paleolithic artists navigated dark caves, archaeologist Mª Ángeles Medina-Alcaide and her team tested different lighting methods in a cave in Spain using replicas of artifacts found in European caves with art. They used three different Paleolithic light sources—torches, animal-fat lamps, and fireplaces—determining that each likely had a specific purpose. For instance, the team learned that the animal-fat lamps were less useful than torches while walking because the lamps didn't illuminate the cave floor.</p><p>Which choice best states the main idea of the text?</p>",
    answer: {
      choices: {
        A: { body: "<p>Medina-Alcaide and her team's study demonstrated that fireplaces were essential to the creators of Paleolithic cave art.</p>" },
        B: { body: "<p>Medina-Alcaide and her team discovered that Paleolithic cave artists in Spain used animal-fat lamps more often than they used torches.</p>" },
        C: { body: "<p>Medina-Alcaide and her team were reluctant to draw many conclusions from their study because of the difficulty they had replicating light sources based on known artifacts.</p>" },
        D: { body: "<p>Medina-Alcaide and her team tested Paleolithic light sources and learned some details about how Paleolithic artists traveled within dark caves.</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is the best answer because it most accurately states the main idea of the text. The text indicates that archaeologist Mª Ángeles Medina-Alcaide and her team used replicas of Paleolithic light sources to understand how Paleolithic artists moved through dark caves. The researchers learned, for example, that torches were more helpful for moving through caves than animal-fat lamps were.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Central Ideas and Details",
      difficulty: "Medium"
    }
  },
  {
    questionId: "7297b3e0",
    externalId: "7297b3e0",
    section: "Reading",
    prompt: "<p><strong>Number of Young Fish Collected at Mangrove Sites in the Egyptian Red Sea During Three Seasons of 2010</strong></p><p>[Graph showing Common silver-biddy, Red Sea goatfish, and Milkfish collected in Winter, Spring, and Fall]</p><p>Mangroves are trees or bushes that grow on the coastlines of seas and rivers. Areas with mangroves are great places for young fish since they help keep these fish fed and protected while they grow. To study the importance of mangroves to young fish, researchers Mohamed A.Abu El-Regal and Nesreen K. Ibrahim collected and identified young fish from three different mangrove sites in the Egyptian Red Sea. They collected fish in the winter, spring, and autumn of 2010, collecting a total of 269 fish from 21 different species. For some species, more fish were collected in the winter than the other two seasons, for instance: ______</p><p>Which choice most effectively uses the data in the graph to complete the example?</p>",
    answer: {
      choices: {
        A: { body: "<p>more common silver-biddy and milkfish were collected in the winter than in either of the other two seasons.</p>" },
        B: { body: "<p>the common silver-biddy was collected more frequently than the other two species in all three seasons.</p>" },
        C: { body: "<p>in the spring, researchers collected more Red Sea goldfish than they collected from the other two species.</p>" },
        D: { body: "<p>in the fall, researchers collected 10 common silver-biddy but collected no milkfish or Red Sea goatfish.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer. The claim is about which fish were collected more in winter than in other seasons. By comparing the number of common silver-biddy and milkfish collected in each season, we can see that more of these fish were collected in winter than in any other season.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Easy"
    }
  }
];

// Generate JSON files for each question
let count = 0;
questions.forEach(question => {
  const filename = `${question.questionId}.json`;
  const filepath = path.join(outputDir, filename);

  fs.writeFileSync(filepath, JSON.stringify(question, null, 2));
  count++;
  console.log(`Created: ${filename}`);
});

console.log(`\nTotal questions processed: ${count}`);
