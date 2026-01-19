const fs = require('fs');
const path = require('path');

// Output directory for generated JSON files
const outputDir = path.join(__dirname, '../public/bank/questions');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Helper function to escape HTML entities
function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// All 50 questions from Sullivan ELA 201-250
const questions = [
  {
    questionId: "c83508f3",
    externalId: "c83508f3",
    section: "Reading",
    prompt: `<p>Corn-Related Vocabulary in Various Southeastern Languages</p>
<table>
<tr><th>Language family</th><th>Word (language)</th><th>English translation</th><th>Proposed origin in vocabulary of the Totozoquean language family</th></tr>
<tr><td>Muskogean</td><td>tanchi' (Chickasaw); tanchi (Choctaw); vce (Muscogee, pronounced "uh-chi")</td><td>corn</td><td>no</td></tr>
<tr><td>Iroquoian</td><td>se-lu (Cherokee)</td><td>corn</td><td>no</td></tr>
<tr><td>Caddoan</td><td>-k'as- (Caddo)</td><td>dried corn</td><td>yes</td></tr>
<tr><td>Chitimacha</td><td>k'asma (Chitimacha)</td><td>corn</td><td>yes</td></tr>
</table>
<p>In Caddo, a language from what is now the US Southeast, vocabulary pertaining to corn cultivation resembles equivalent vocabulary in the Totozoquean language family in Mexico. This resemblance is perhaps attributable to cultural contact: such words could have entered Caddo through the intermediary of the neighboring but unrelated Chitimacha language, concurrent with the dissemination of corn itself from Mexico into the Southeast after 700 CE. That the vocabulary pertaining to domestic crops accompanies them as they diffuse into new regions is an established phenomenon globally. Crops may also be decoupled from vocabulary altogether: corn cultivation became ubiquitous among the Southeastern tribes, yet ______</p>
<p>Which choice most effectively uses data from the table to complete the statement?</p>`,
    answer: {
      choices: {
        A: { body: "<p>the origins of vocabulary pertaining to the crop vary across languages in the region, with the words for corn in Cherokee and the Muskogean languages showing no demonstrable relationship to Totozoquean vocabulary.</p>" },
        B: { body: "<p>the region is linguistically diverse, being home not only to Chitimacha and Caddo, but also to the Muskogean language family (including Chickasaw, Choctaw, and Muscogee) and to one Iroquoian language (Cherokee).</p>" },
        C: { body: "<p>corn-related vocabulary underwent changes when entering other, unrelated languages, as can be seen by the divergence of the Caddo word from the Chitimacha word it originated in.</p>" },
        D: { body: "<p>words for corn in the languages of the Muskogean family evolved from a common root, with the Muscogee word having lost certain consonant sounds still present in the Chickasaw and Choctaw words.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer. The table provides evidence that the words for corn in the Cherokee and Muskogean languages appear unrelated to those in Caddo language, which is described as closely related to the Totozoquean language family. This supports the claim that corn cultivation spread across the Southeast without necessarily spreading Totozoquean vocabulary along with it.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Hard"
    }
  },
  {
    questionId: "02cac697",
    externalId: "02cac697",
    section: "Reading",
    prompt: `<p>A student is writing a paper about <em>One Night in Miami...</em>, a 2020 film directed by Regina King and written by Kemp Powers. Powers adapted the film's screenplay from his 2013 play, which he wrote after learning about a 1964 meeting that took place in Miami, Florida, between four prominent figures of the Civil Rights movement: Malcolm X, Muhammad Ali, Jim Brown, and Sam Cooke. The student claims that although Powers was inspired by this meeting, the film is best understood not as a precise retelling of historical events but rather as a largely imagined but informed representation of them.</p>
<p>Which quotation from an article about <em>One Night in Miami...</em> would be the most effective evidence for the student to include in support of this claim?</p>`,
    answer: {
      choices: {
        A: { body: "<p>\"When Powers learned of the meeting, he initially planned to write a much longer work about its four famous participants rather than focusing on the meeting itself.\"</p>" },
        B: { body: "<p>\"<em>One Night in Miami...</em> received numerous awards and nominations, including an Academy Award nomination for Powers for Best Adapted Screenplay.\"</p>" },
        C: { body: "<p>\"Powers has described <em>One Night in Miami...</em> as the story of four friends encouraging and supporting one another while engaged in a crucial political debate about how best to achieve equality for Black people in the United States.\"</p>" },
        D: { body: "<p>\"Powers could find only the most superficial historical details about the meeting, so he read extensively about the four individuals and their thinking at the time in an effort to portray what might have happened between them.\"</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is the best answer because it provides a quotation that effectively supports the student's claim about the film One Night in Miami.... The quotation states that in researching the play on which the film was based, Kemp Powers only found superficial details about what actually happened during the 1964 meeting in Miami between four leading Civil Rights leaders, meaning that there is very little information about the meeting in the historical record. In the absence of greater details, it wouldn't have been possible for the film to be a precise retelling of the historical events it depicts. The quotation explains that to compensate for this lack of information about the meeting, Powers did extensive research into the four figures and how they thought at the time in order to speculate in an informed way about what they might have said or what might have occurred between them. Therefore, the quotation effectively supports the claim that the film is best understood not as a precise retelling of a historical event but as a deeply informed imaginative rendering of that event.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Hard"
    }
  },
  {
    questionId: "e92c75a8",
    externalId: "e92c75a8",
    section: "Reading",
    prompt: `<p><em>Barchester Towers</em> is an 1857 novel by Anthony Trollope. In the novel, Trollope's portrayal of Dr. Proudie underscores the character's exaggerated sense of his own abilities: ______</p>
<p>Which quotation from <em>Barchester Towers</em> most effectively illustrates the claim?</p>`,
    answer: {
      choices: {
        A: { body: "<p>\"It must not...be taken as proved that Dr. Proudie was a man of great mental powers, or even of much capacity for business, for such qualities had not been required in him.\"</p>" },
        B: { body: "<p>\"[Dr. Proudie] was comparatively young, and had, as he fondly flattered himself, been selected as possessing such gifts, natural and acquired, as must be sure to recommend him to a yet higher notice.\"</p>" },
        C: { body: "<p>\"[Dr. Proudie's] residence in the metropolis, rendered necessary by duties thus entrusted to him, his high connexions, and the peculiar talents and nature of the man, recommended him to persons in power.\"</p>" },
        D: { body: "<p>\"[Dr. Proudie] was certainly possessed of sufficient tact to answer the purpose for which he was required without making himself troublesome.\"</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is the best answer. In this quotation, Dr. Proudie is described as \"fondly flatter[ing] himself\" that he has gifts that \"must be sure to recommend him to a yet higher notice.\" In other words, he expects his skills to push him to greater fame and success. This implies an exaggerated sense of his own abilities, which matches the claim we're trying to support.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Hard"
    }
  },
  {
    questionId: "073bd5b1",
    externalId: "073bd5b1",
    section: "Reading",
    prompt: `<p>In the 1950s and '60s, plant breeders created shorter varieties of wheat and rice plants with improved yields. Kelly Gillespie, Rex Bernardo, and other plant specialists are building on that work by exploring the development of shorter corn varieties. Greater height can allow individual plants to produce more ears of corn. However, greater height also makes the stalks more likely to snap or be uprooted in strong winds before the corn can be harvested. Because of this trade-off, some plant specialists suggest that shorter corn varieties will actually ______</p>
<p>Which choice most logically completes the text?</p>`,
    answer: {
      choices: {
        A: { body: "<p>help improve yields of harvested corn by being more likely to survive in severe winds.</p>" },
        B: { body: "<p>be more likely to be uprooted due to the weight of the corn on the stalks.</p>" },
        C: { body: "<p>require more land for planting than short varieties of wheat and rice typically do.</p>" },
        D: { body: "<p>begin developing more ears of corn on each plant than the tallest variety of corn currently does.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer because it presents the conclusion that most logically completes the text's discussion about a trade-off in growing shorter varieties of corn. The text explains that plant specialists are working to develop shorter corn varieties in an effort to improve yields. The text points out that although greater height in corn plants can lead to more ears of corn per plant, it also makes the stalks more likely to be damaged by strong winds before there is a chance to harvest the corn. This presents a clear trade-off between potential yield (taller plants producing more ears per plant) and harvest reliability (shorter plants surviving until harvest time). Given this information, it is reasonable to infer that shorter corn varieties, while possibly producing fewer ears per plant, would be more likely to survive until harvest time. This survival advantage would result in improved yields of harvested corn because more plants would remain intact, thus offsetting the potential reduction in ears per shorter plant.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Inferences",
      difficulty: "Easy"
    }
  },
  {
    questionId: "5ead8efc",
    externalId: "5ead8efc",
    section: "Reading",
    prompt: `<p>Matthew D. Rocklage and team examined whether consumer ratings of movies can predict box office success. The team considered both numeric star ratings and written reviews in their research. To analyze the written reviews, the team measured the emotionality—the degree to which a written review expresses an emotional reaction—of user reviews on a movie rating website, assigning each review an emotionality score. After reviewing this research, a student argues that the emotionality of movie reviews is unrelated to a movie's success at the box office.</p>
<p>Which finding, if true, would most directly weaken the student's conclusion?</p>`,
    answer: {
      choices: {
        A: { body: "<p>Movies that had the highest average emotionality scores received the lowest average star ratings on the movie rating website.</p>" },
        B: { body: "<p>The average emotionality score of a movie's reviews was a positive predictor of that movie's box office earnings.</p>" },
        C: { body: "<p>More than half of the movies that the team examined received an average star rating of 3 out of 5 stars.</p>" },
        D: { body: "<p>The movies that were most successful at the box office tended to have high average star ratings.</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is the best answer. This choice weakens the student's conclusion by suggesting that the emotionality of movie reviews is related to box office success: the higher the emotionality score, the better the movie performs at the box office.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Medium"
    }
  },
  {
    questionId: "ef8f7d25",
    externalId: "ef8f7d25",
    section: "Reading",
    prompt: `<p>Archaeologists have been debating the origin of a rare form of lead found in Shang dynasty (1766–1046 BCE) bronze artifacts since its presence was discovered in China in the 1990s. Different researchers have proposed theories on which regions of the world would have had the raw materials containing the specific lead in these artifacts, but no conclusive evidence has been presented. What is intriguing is that bronze artifacts from China dated after the Shang dynasty do not contain this form of lead, suggesting that ______</p>
<p>Which choice most logically completes the text?</p>`,
    answer: {
      choices: {
        A: { body: "<p>Shang dynasty bronze pieces are rare and therefore more valuable than those from other time periods.</p>" },
        B: { body: "<p>the source of some of the raw materials used to make bronze was exploited only until the end of the Shang dynasty.</p>" },
        C: { body: "<p>bronze was used for a short time during the Shang dynasty before different metals were used to make artifacts.</p>" },
        D: { body: "<p>methods used to analyze bronze artifacts are not useful on pieces that are dated after the Shang dynasty.</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is the best answer. The passage tells us that Shang dynasty bronze artifacts contained \"a rare form of lead,\" but that bronze artifacts after this time did not contain that lead. Although we don't know where that specific type of bronze came from, we can conclude that that source was not used after the end of the Shang dynasty—otherwise, post-Shang dynasty pieces would also contain that rare form of lead.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Inferences",
      difficulty: "Easy"
    }
  },
  {
    questionId: "01d4dfd9",
    externalId: "01d4dfd9",
    section: "Reading",
    prompt: `<p>Marta Coll and colleagues' 2010 Mediterranean Sea biodiversity census reported approximately 17,000 species, nearly double the number reported in Carlo Bianchi and Carla Morri's 2000 census—a difference only partly attributable to the description of new invertebrate species in the interim. Another factor is that the morphological variability of microorganisms is poorly understood compared to that of vertebrates, invertebrates, plants, and algae, creating uncertainty about how to evaluate microorganisms as species. Researchers' decisions on such matters therefore can be highly consequential. Indeed, the two censuses reported similar counts of vertebrate, plant, and algal species, suggesting that ______</p>
<p>Which choice most logically completes the text?</p>`,
    answer: {
      choices: {
        A: { body: "<p>Coll and colleagues reported a much higher number of species than Bianchi and Morri did largely due to the inclusion of invertebrate species that had not been described at the time of Bianchi and Morri's census.</p>" },
        B: { body: "<p>some differences observed in microorganisms may have been treated as variations within species by Bianchi and Morri but treated as indicative of distinct species by Coll and colleagues.</p>" },
        C: { body: "<p>Bianchi and Morri may have been less sensitive to the degree of morphological variation displayed within a typical species of microorganism than Coll and colleagues were.</p>" },
        D: { body: "<p>the absence of clarity regarding how to differentiate among species of microorganisms may have resulted in Coll and colleagues underestimating the number of microorganism species.</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is the best answer because it presents the conclusion that most logically completes the text's discussion of the different counts of species in the Mediterranean Sea. The text states that Coll and colleagues reported almost double the number of species that Bianchi and Morri reported in their study ten years earlier. According to the text, this difference can only be partly attributed to new invertebrate species being described in the years between the two studies, which means there must be an additional factor that made Coll and colleagues' count so much higher than Bianchi and Morri's count. The text goes on to explain that factor: researchers have a relatively poor understanding of microorganisms' morphological variability, or the differences in microorganisms' structure and form. This poor understanding makes it hard to classify microorganisms by species and means that researchers' decisions about classifying microorganisms can have a large effect on the overall species counts that researchers report. Additionally, the text says that the two censuses reported similar numbers of vertebrate, plant, and algal species, which means that the difference in overall species did not come from differences in those categories. Given all this information, it most logically follows that Coll and colleagues may have treated some of the differences among microorganisms as indicative of the microorganisms being different species, whereas Bianchi and Morri treated those differences as variations within species, resulting in Coll and colleagues reporting many more species than Bianchi and Morri did.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Inferences",
      difficulty: "Hard"
    }
  },
  {
    questionId: "9ba747e1",
    externalId: "9ba747e1",
    section: "Reading",
    prompt: `<p>When digging for clams, their primary food, sea otters damage the roots of eelgrass plants growing on the seafloor. Near Vancouver Island in Canada, the otter population is large and well established, yet the eelgrass meadows are healthier than those found elsewhere off Canada's coast. To explain this, conservation scientist Erin Foster and colleagues compared the Vancouver Island meadows to meadows where otters are absent or were reintroduced only recently. Finding that the Vancouver Island meadows have a more diverse gene pool than the others do, Foster hypothesized that damage to eelgrass roots increases the plant's rate of sexual reproduction; this, in turn, boosts genetic diversity, which benefits the meadows' health overall.</p>
<p>Which finding, if true, would most directly undermine Foster's hypothesis?</p>`,
    answer: {
      choices: {
        A: { body: "<p>At some sites in the study, eelgrass meadows are found near otter populations that are small and have only recently been reintroduced.</p>" },
        B: { body: "<p>At several sites not included in the study, there are large, well-established sea otter populations but no eelgrass meadows.</p>" },
        C: { body: "<p>At several sites not included in the study, eelgrass meadows' health correlates negatively with the length of residence and size of otter populations.</p>" },
        D: { body: "<p>At some sites in the study, the health of plants unrelated to eelgrass correlates negatively with the length of residence and size of otter populations.</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is the best answer because it presents a finding that, if true, would weaken Foster's hypothesis that damage to eelgrass roots improves the health of eelgrass meadows by boosting genetic diversity. The text indicates that sea otters damage eelgrass roots but that eelgrass meadows near Vancouver Island, where there's a large otter population, are comparatively healthy. When Foster and her colleagues compared the Vancouver Island eelgrass meadows to those that don't have established otter populations, the researchers found that the Vancouver Island meadows are more genetically diverse than the other meadows are. This finding led Foster to hypothesize that damage to the eelgrass roots encourages eelgrass reproduction, thereby improving genetic diversity and the health of the meadows. If, however, other meadows not included in the study are less healthy the larger the local otter population is and the longer the otters have been in residence, that would suggest that damage to the eelgrass roots, which would be expected to increase with the size and residential duration of the otter population, isn't leading meadows to be healthier. Such a finding would therefore weaken Foster's hypothesis.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Hard"
    }
  },
  {
    questionId: "f7b78f6e",
    externalId: "f7b78f6e",
    section: "Reading",
    prompt: `<p>Xin Wang and colleagues have discovered the earliest known example of a flower bud in a 164-million-year-old plant fossil in China. The researchers have named the new species <em>Florigerminis jurassica</em>. They believe that the discovery pushes the emergence of flowering plants, or angiosperms, back to the Jurassic period, which occurred between 145 million and 201 million years ago.</p>
<p>According to the text, how old was the fossil that Wang and colleagues discovered?</p>`,
    answer: {
      choices: {
        A: { body: "<p>150 million years old</p>" },
        B: { body: "<p>145 million years old</p>" },
        C: { body: "<p>164 million years old</p>" },
        D: { body: "<p>201 million years old</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is the best answer because it gives the age for the fossil discovered by Wang and colleagues that is directly supported by the text. According to the text, Xin Wang and colleagues discovered a 164-million-year-old plant fossil. This plant fossil included a flower bud, which the researchers believe provides evidence that flowering plants emerged in the Jurassic period, which falls between 145 million and 201 million years ago.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Central Ideas and Details",
      difficulty: "Easy"
    }
  },
  {
    questionId: "3858f84c",
    externalId: "3858f84c",
    section: "Reading",
    prompt: `<p>[Graph showing Median Ages of First Marriage for Men and Women in the United States and in England and Wales, 1900–2000]</p>
<p>A sociology student is reading an essay on the median age of first marriage in Western countries throughout the twentieth century. The author of the essay cites factors common to these countries that the author believes caused an increase in the median age of first marriage, such as new technologies that shortened the time needed for domestic chores, making two-person households less necessary and living alone more viable. The student asserts that beyond these factors there must be additional ones specific to particular Western countries that influenced the increase of age at first marriage.</p>
<p>Which choice most effectively uses data from the graph that support the student's assertion?</p>`,
    answer: {
      choices: {
        A: { body: "<p>Between 1970 and 2000, the median age of first marriage rose more sharply for men in England and Wales than it did for men in the United States.</p>" },
        B: { body: "<p>In England and Wales, the median age of first marriage was consistently higher for men than for women between 1900 and 2000, but this was not always the case in the United States.</p>" },
        C: { body: "<p>The median age of first marriage for men in England and Wales was lower in 1970 than in 1950 or 1990.</p>" },
        D: { body: "<p>Between 1900 and 2000, the median age of first marriage for women in England and Wales was consistently higher than for women in the United States, as was the case for men.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer. The student concluded that country-specific factors influence changes to median age of first marriage. This choice describes a time period when the rate of change differed between countries, suggesting that country-specific factors may have played a role in these changes.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Hard"
    }
  },
  {
    questionId: "883e22fb",
    externalId: "883e22fb",
    section: "Reading",
    prompt: `<p>NASA's <em>Cassini</em> probe has detected an unusual wobble in the rotation of Mimas, Saturn's smallest moon. Using a computer model to study Mimas's gravitational interactions with Saturn and tidal forces, geophysicist Alyssa Rhoden and colleagues have proposed that this wobble could be due to a liquid ocean moving beneath the moon's icy surface. The researchers believe other moons should be examined to see if they too might have oceans hidden beneath their surfaces.</p>
<p>Which choice best states the main idea of the text?</p>`,
    answer: {
      choices: {
        A: { body: "<p>Rhoden and colleagues were the first to confirm that several of Saturn's moons contain hidden oceans.</p>" },
        B: { body: "<p>Research has failed to identify signs that there is an ocean hidden beneath the surface of Mimas.</p>" },
        C: { body: "<p>Rhoden and colleagues created a new computer model that identifies moons with hidden oceans without needing to analyze the moons' rotation.</p>" },
        D: { body: "<p>Research has revealed that an oddity in the rotation of Mimas could be explained by an ocean hidden beneath its surface.</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is the best answer. The study isn't definitive, but it says that Mimas's wobbly rotation could be explained by the hidden ocean.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Central Ideas and Details",
      difficulty: "Easy"
    }
  },
  {
    questionId: "90e0e65b",
    externalId: "90e0e65b",
    section: "Reading",
    prompt: `<p>Ana Castillo's 1986 novel <em>The Mixquiahuala Letters</em> is a story told entirely through expressive letters from the narrator to her friend—letters that Castillo suggests could be read in several different orders. As they began reading it in class, some students remarked that they found the novel's letter format daunting and its treatment of gender relations old-fashioned. The professor, however, pointed out that the novel is written in modern-sounding language and addresses issues that still matter today, suggesting that <em>The Mixquiahuala Letters</em> ______</p>
<p>Which choice most logically completes the text?</p>`,
    answer: {
      choices: {
        A: { body: "<p>has more to say about gender relations than other novels from the same period.</p>" },
        B: { body: "<p>is more relevant to contemporary audiences than it may seem at first.</p>" },
        C: { body: "<p>is easier to read than many contemporary novels that focus on friendship.</p>" },
        D: { body: "<p>is best understood after multiple readings in different orders.</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is the best answer because it most logically completes the text's discussion of Ana Castillo's 1986 novel The Mixquiahuala Letters. The text states that the novel consists entirely of letters from the narrator to her friend—a format that some students reading the novel in a class found intimidating. According to the text, those students also found the novel's treatment of gender to be old-fashioned. In response to the students' concerns, their professor emphasized the novel's relevance: it's written in modern-sounding language and addresses issues that still matter. This, in turn, suggests that The Mixquiahuala Letters is more relevant to contemporary audiences than it may initially seem.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Inferences",
      difficulty: "Medium"
    }
  },
  {
    questionId: "8174f406",
    externalId: "8174f406",
    section: "Reading",
    prompt: `<p>Martin Dančák, Wewin Tjiasmanto, and colleagues have identified a new carnivorous plant species (<em>Nepenthes pudica</em>) in Indonesia. Like other carnivorous plants, <em>N. pudica</em> has pitfall traps, or pitchers, that capture prey, but unlike others, the pitchers of <em>N. pudica</em> are located underground. The researchers unearthed the new species on fairly dry ridges with surfaces that host few other plants and animals. Therefore, the researchers hypothesize that the <em>N. pudica</em> species likely ______</p>
<p>Which choice most logically completes the text?</p>`,
    answer: {
      choices: {
        A: { body: "<p>represents one of many undiscovered carnivorous plant species in the region.</p>" },
        B: { body: "<p>formed pitchers early in development to absorb more moisture.</p>" },
        C: { body: "<p>is buried by nearby animals as they forage along the ridges for food.</p>" },
        D: { body: "<p>evolved to have underground traps to access more prey than would surface traps.</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is the best answer. The text says that N.pudica's prey-catching pitchers are underground. It also says that the ridges where N. pudica lives don't have many plants and animals on the surface. This suggests that N. pudica evolved underground pitchers in order to catch more prey.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Inferences",
      difficulty: "Easy"
    }
  },
  {
    questionId: "aa460243",
    externalId: "aa460243",
    section: "Reading",
    prompt: `<p>The fynbos shrubland is a diverse habitat found only in South Africa. It is adjacent to the Afro-temperate forest, with almost no transition space between the two distinct habitats. Plants in the fynbos have uniquely thin and long root systems that spread out over large distances to absorb nutrients from the soil. Ecologists transplanted tree seedlings from the forest into plots in the fynbos. Seedlings in plots isolated from the roots of fynbos plants exhibited a growth rate five times greater than that of the seedlings in plots in close proximity to the roots of fynbos plants.</p>
<p>Based on the text, what role do fynbos roots most likely have in maintaining the border between the fynbos shrubland and the Afro-temperate forest habitats?</p>`,
    answer: {
      choices: {
        A: { body: "<p>Fynbos roots damage the root systems of forest plants, leaving those plants unable to acquire sufficient nutrients.</p>" },
        B: { body: "<p>Fynbos roots extend close enough to the forest plants' roots that they constitute a physical barrier that forest plants' roots cannot pass.</p>" },
        C: { body: "<p>The root systems of fynbos plants allow the plants to take in so many soil nutrients that forest plants are prevented from flourishing in the fynbos.</p>" },
        D: { body: "<p>The root systems of fynbos plants enhance the soil immediately surrounding the plants, allowing them to thrive in an otherwise harsh habitat.</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is the best answer because it presents a conclusion about the role of fynbos roots in maintaining the border with the Afro-temperate forest that can be reasonably inferred from the text. The text states that plants in the fynbos have \"uniquely thin and long root systems that spread out over large distances to absorb nutrients from the soil.\" The text then describes an experiment where forest tree seedlings grown in plots isolated from fynbos roots grew at a rate five times greater than seedlings in areas near fynbos roots. This strongly suggests that fynbos roots are depleting soil nutrients to such an extent that forest plants can't get enough nutrients from that soil to flourish, thereby hindering the formation of any significant \"transition space\" between the habitats and helping keep the border between them sharp.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Central Ideas and Details",
      difficulty: "Hard"
    }
  },
  {
    questionId: "5cebee9e",
    externalId: "5cebee9e",
    section: "Reading",
    prompt: `<p>Historians point to the rule of the Piast dynasty as crucial to the formation of the Polish state. However, some differentiate between members of the dynasty like Mieszko II Lambert, who ruled as king from 1025 to 1031 CE, and less well-documented figures like Siemomysł, who is said to have ruled in the 10th century but whose historical actuality is disputed. Siemomysł appears in the <em>Gesta principum Polonorum</em>, a chronicle of medieval Polish history written between 1112 and 1118. However, the chronicle's documentation of Siemomysł relies on oral tradition, unlike its records of later rulers.</p>
<p>According to the text, what is a difference between how historians view Siemomysł and how they view Mieszko II Lambert?</p>`,
    answer: {
      choices: {
        A: { body: "<p>Historians agree that Mieszko II Lambert existed, but disagree about whether Siemomysł existed.</p>" },
        B: { body: "<p>Historians believe that the <em>Gesta principum Polonorum</em> provides more evidence for Siemomysł's existence than it does for Mieszko II Lambert's existence.</p>" },
        C: { body: "<p>Historians agree that Siemomysł ruled Poland much later than Mieszko II Lambert.</p>" },
        D: { body: "<p>Historians find the orally transmitted stories affirming the existence of Mieszko II Lambert to be more convincing than similar stories about Siemomysł.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer because it presents a statement about how historians view Siemomysł and Mieszko II Lambert that is supported by the text. The text states that the Piast dynasty had a number of different members. The text refers to two of the rulers in the Piast dynasty by name: Mieszko II Lambert, whose rule was known to have occurred from 1025 to 1031 CE, and Siemomysł (\"whose historical actuality is disputed\"), for whom less is known and who therefore is the subject of debate among historians. The text further casts doubt about Siemomysł by stating that he is \"said to have ruled\" during the 10th century, or the 900s, which suggests the possibility that he didn't rule. The text also mentions that the chronicle's documentation of Siemomysł relies on oral tradition, unlike its records of later rulers, including Mieszko II Lambert. This indicates that historians agree that Mieszko II Lambert was an actual historical figure, but they disagree about whether Siemomysł existed.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Central Ideas and Details",
      difficulty: "Medium"
    }
  },
  {
    questionId: "a01cc156",
    externalId: "a01cc156",
    section: "Reading",
    prompt: `<p>\"The Young Girl\" is a 1920 short story by Katherine Mansfield. In the story, the narrator takes an unnamed seventeen-year-old girl and her younger brother out for a meal. In describing the teenager, Mansfield frequently contrasts the character's pleasant appearance with her unpleasant attitude, as when Mansfield writes of the teenager, ______</p>
<p>Which quotation from \"The Young Girl\" most effectively illustrates the claim?</p>`,
    answer: {
      choices: {
        A: { body: "<p>\"I heard her murmur, 'I can't bear flowers on a table.' They had evidently been giving her intense pain, for she positively closed her eyes as I moved them away.\"</p>" },
        B: { body: "<p>\"While we waited she took out a little, gold powder-box with a mirror in the lid, shook the poor little puff as though she loathed it, and dabbed her lovely nose.\"</p>" },
        C: { body: "<p>\"I saw, after that, she couldn't stand this place a moment longer, and, indeed, she jumped up and turned away while I went through the vulgar act of paying for the tea.\"</p>" },
        D: { body: "<p>\"She didn't even take her gloves off. She lowered her eyes and drummed on the table. When a faint violin sounded she winced and bit her lip again. Silence.\"</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is the best answer because it most effectively illustrates the claim in the text that in describing the teenaged girl, Mansfield contrasts the character's pleasant appearance with her unpleasant attitude. In the quotation, Mansfield describes the teenager as having a \"lovely nose\" (a compliment about her appearance) but also as treating her makeup puff \"as though she loathed it\" (a judgment suggesting her unpleasant attitude).</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Hard"
    }
  },
  {
    questionId: "695c3f5f",
    externalId: "695c3f5f",
    section: "Reading",
    prompt: `<p>In 2022, researchers rediscovered ancient indigenous glyphs, or drawings, on the walls of a cave in Alabama. The cave's ceiling was only a few feet high, affording no position from which the glyphs, being as wide as ten feet, could be viewed or photographed in their entirety. However, the researchers used a technique called photogrammetry to assemble numerous photos of the walls into a 3D model. They then worked with representatives of tribes originally from the region, including the Chickasaw Nation, to understand the significance of the animal and humanoid figures adorning the cave.</p>
<p>According to the text, what challenge did the researchers have to overcome to examine the glyphs?</p>`,
    answer: {
      choices: {
        A: { body: "<p>The cave was so remote that the researchers couldn't easily reach it.</p>" },
        B: { body: "<p>Some of the glyphs were so faint that they couldn't be photographed.</p>" },
        C: { body: "<p>The researchers were unable to create a 3D model of the cave.</p>" },
        D: { body: "<p>The cave's dimensions prevented the researchers from fully viewing the glyphs.</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is the best answer. The text describes the very low ceiling of the cave, making it impossible to photograph the very wide glyphs all at once.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Central Ideas and Details",
      difficulty: "Easy"
    }
  },
  {
    questionId: "f8bcc659",
    externalId: "f8bcc659",
    section: "Reading",
    prompt: `<p>In 2016 biological anthropologist Heather F. Smith and her team investigated the evolution of the appendix, an intestinal organ that is present in some mammals, including humans, but is generally thought to have no function. Studying 533 mammal species, the team found that the appendix has emerged independently across multiple lineages in separate instances and, significantly, hasn't disappeared after emerging in specific lineages. Moreover, the team determined that species with the organ tend to have higher concentrations of lymphoid tissue, which supports immune responses, in the cecum, the organ the appendix is attached to. Therefore, the team hypothesized that the appendix likely ______</p>
<p>Which choice most logically completes the text?</p>`,
    answer: {
      choices: {
        A: { body: "<p>was once present in many nonmammal species but has since disappeared from those lineages.</p>" },
        B: { body: "<p>has been preserved in certain mammal species because it benefits their immune systems.</p>" },
        C: { body: "<p>will emerge in a greater number of mammal species because it may serve a necessary function in the immune system.</p>" },
        D: { body: "<p>produced higher concentrations of lymphoid tissue in mammals in the past than it does currently.</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is the best answer because it most logically completes the text's discussion of Smith and colleagues' investigation of the evolution and biological role of the appendix. The text indicates that the team found several instances of the appendix emerging and not disappearing in the lineages of various mammal species the team examined. Furthermore, the text states that species that possess an appendix also tend to have relatively high amounts of lymphoid tissue—a type of tissue that supports immune system function. Taken together, these details strongly support the hypothesis that the appendix has persisted in some species because it has a function that contributes to effective immune responses in those species.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Inferences",
      difficulty: "Medium"
    }
  },
  {
    questionId: "dc2af3a1",
    externalId: "dc2af3a1",
    section: "Reading",
    prompt: `<p>Microplastics are tiny pieces of plastic waste. Areas of the ocean with higher concentrations of microplastic particles also have smaller and fewer waves. A study by Yukun Sun and colleagues found that the concentration of microplastic particles cannot be the only reason for this reduced wave activity because the concentration of particles that would have the observed effect is much higher than that found in these areas of the ocean. However, they found that surfactants, chemicals often used to manufacture plastics, are released into the water from microplastics and have a much stronger wave-reducing effect.</p>
<p>According to the text, what did Sun and colleagues discover about surfactants?</p>`,
    answer: {
      choices: {
        A: { body: "<p>They have a much stronger effect on wave activity than microplastics alone do.</p>" },
        B: { body: "<p>They are mainly composed of water.</p>" },
        C: { body: "<p>They are helpful for removing microplastics from the ocean.</p>" },
        D: { body: "<p>They can be used to contain microplastics within certain areas of the ocean.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer because it presents a statement about surfactants that is supported by the text. The text indicates that higher concentrations of microplastics have been associated with waves that are relatively small and few. According to the text, however, a study by Sun and colleagues found that concentrations of microplastic particles can't be the only reason for the reduced wave activity because a much higher concentration of particles is needed to produce that observed effect. Instead, the text indicates that Sun and colleagues found that surfactants are released from microplastics into the ocean and have a much stronger wave-reducing effect than microplastics alone do.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Central Ideas and Details",
      difficulty: "Medium"
    }
  },
  {
    questionId: "069813ac",
    externalId: "069813ac",
    section: "Reading",
    prompt: `<p>Pigments give paints and dyes their color. Ocher is a mineral-based pigment used to make several colors, including red. Red ocher gets its color from iron oxide. Pigments can also be plant-based; plant-based pigments contain a high level of carbon. In a 2023 study, archaeologists tested the red pigment on decorated beads made by members of the Natufian culture approximately 15,000 years ago. The test showed that the pigment found on several beads contained no iron but had a high level of carbon. This finding led the researchers to conclude that ______</p>
<p>Which choice most logically completes the text?</p>`,
    answer: {
      choices: {
        A: { body: "<p>the Natufian beads examined in the study are the oldest surviving examples of the use of plant-based pigments for decorating beads.</p>" },
        B: { body: "<p>the Natufian beadmakers used plant-based pigments rather than ocher to decorate some of the beads examined in the study.</p>" },
        C: { body: "<p>the Natufian beadmakers preferred to use plant-based pigments because they are much brighter than mineral-based pigments are.</p>" },
        D: { body: "<p>the pigments used by the Natufian beadmakers likely came from plants because ocher was difficult to find.</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is the best answer because it presents the conclusion that most logically follows from the text's discussion of the chemical content of pigments. The text begins by differentiating between two kinds of pigments: mineral-based pigments such as red ocher, which get their color from iron oxide, and plant-based pigments, which have a high level of carbon. The text then goes on to describe an analysis by archaeologists of the pigment of decorated beads made by members of the Natufian culture around 15,000 years ago. The archaeologists found that the red pigment on some of the beads contained no iron but had a high level of carbon. Since red ocher gets its color from iron oxide, while plant-based pigments have a high level of carbon, the researchers concluded that the Natufian beadmakers used plant-based pigments to decorate some of the beads examined in the study.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Inferences",
      difficulty: "Medium"
    }
  },
  {
    questionId: "21cdd49b",
    externalId: "21cdd49b",
    section: "Reading",
    prompt: `<p>Conventional theories of rhetoric hold that presenting information as coming from credentialed experts increases that information's credibility. When communications researcher Sungkyoung Lee and her colleagues tested messages seeking volunteers for clinical trials, however, they found that participants in their study judged recruitment messages from former trial volunteers as significantly more credible than messages from doctors (i.e., credentialed experts). One reason for this may be that the doctors' status as credentialed experts wasn't ignored but rather was outweighed by participants' views of the experiential relevance of the two types of messengers; that is, participants may have reacted the way they did because ______</p>
<p>Which choice most logically completes the text?</p>`,
    answer: {
      choices: {
        A: { body: "<p>messages from former trial volunteers depicted clinical trials as being more positive experiences than did messages from doctors.</p>" },
        B: { body: "<p>participants did not have enough experience to evaluate the credibility of the doctors' messages but did have enough experience to evaluate the credibility of former trial volunteers' messages.</p>" },
        C: { body: "<p>the fact that former trial volunteers went through the same experience that participants were contemplating while doctors did not was more important to participants than the doctors' status as credentialed experts was.</p>" },
        D: { body: "<p>participants regarded the experiences of both the doctors and former trial volunteers as relevant to the subject of clinical trials but were skeptical of the doctors' status as credentialed experts.</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is the best answer because it presents the conclusion that most logically follows from the text's discussion of how participants considered messages from former trial volunteers and doctors. The text first establishes that information coming from credentialed experts typically increases the credibility of that information. However, the text goes on to describe a situation that goes against this expectation: the messages from previous trial volunteers were judged as more credible than the messages from licensed doctors when recruiting clinic trial participants. The text then goes on to speculate as to why this may have been the case, stating that participants likely considered the messages from the former trial volunteers to be more convincing than the messages from the doctors because the former trial volunteers were perceived as having undergone the same experience that the participants were considering. It is reasonable to infer, then, that participants regarded the former trial volunteers' direct experience as more important to their decision-making than the doctors' status as credentialed experts.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Inferences",
      difficulty: "Hard"
    }
  },
  {
    questionId: "cdbcb6d4",
    externalId: "cdbcb6d4",
    section: "Reading",
    prompt: `<p>To better understand the burrowing habits of <em>Alpheus bellulus</em> (the tiger pistol shrimp), some studies have used resin casting to obtain precise measurements of the shrimps' burrows. Resin casting involves completely filling an empty burrow with a liquid plastic that hardens to create a three-dimensional model; however, recovering the model inevitably requires destroying the burrow. In their 2022 study, Miyu Umehara and colleagues discovered that an x-ray computed tomography (CT) scanner can accurately record a burrow's measurements both at a moment in time and throughout the entire burrow-building process, something that's impossible with resin casting because ______</p>
<p>Which choice most logically completes the text?</p>`,
    answer: {
      choices: {
        A: { body: "<p>it can only be used on burrows below a certain size.</p>" },
        B: { body: "<p>it does not allow for multiple castings of the same burrow over time.</p>" },
        C: { body: "<p>the casting process takes more time than <em>A. bellulus</em> takes to construct a burrow.</p>" },
        D: { body: "<p>the process of recovering the model distorts the resin's shape.</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is the best answer. Since resin casting \"inevitably requires destroying the burrow,\" it would be impossible to make multiple castings of the same burrow over time.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Inferences",
      difficulty: "Hard"
    }
  },
  {
    questionId: "267d46b2",
    externalId: "267d46b2",
    section: "Reading",
    prompt: `<p>East Australian humpback whales migrate up to 10,000 kilometers each year to reach their breeding grounds. Researchers long believed that migrating whales live only on the extra energy they stored up during the feeding season. But marine biologist Vanessa Pirotta and her team aren't so sure. They analyzed 20 years of observations of the migrating whales made by citizen scientists (members of the public who help collect data for scientific research). The team claims that the whales may not live only on their stored energy during migration.</p>
<p>Which finding, if true, would most directly support the team's claim?</p>`,
    answer: {
      choices: {
        A: { body: "<p>Citizen scientists have observed many different types of marine animals feeding alongside the whales.</p>" },
        B: { body: "<p>Citizen scientists have made many observations of the whales feeding as they migrate to their breeding grounds.</p>" },
        C: { body: "<p>Citizen scientists have made more observations of the whales migrating to their breeding grounds than of the whales returning to their feeding grounds.</p>" },
        D: { body: "<p>Citizen scientists have recently begun to observe the whales migrating to their breeding grounds earlier in the year.</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is the best answer because it presents a finding that, if true, would most directly support Pirotta and her team's claim that East Australian humpback whales may not live only on stored energy during migration. The text explains that it has long been thought that East Australian humpback whales store extra energy during the feeding season and then use that energy to survive while traveling to their breeding grounds. If it were true that citizen scientists have often seen the whales feeding as they migrate to the breeding grounds, that would indicate that the whales sometimes feed and take in additional energy during the journey, meaning that they may not rely only on energy they stored before migrating.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Medium"
    }
  },
  {
    questionId: "fca94500",
    externalId: "fca94500",
    section: "Reading",
    prompt: `<p>Violins made by Antonio Stradivari and other craftspeople in the sixteenth to eighteenth centuries in Cremona, Italy, produce a sound that is considered superior to that of modern stringed instruments. Some experts have claimed that the type of wood used to create Cremonese violins is responsible for their prized sound, but modern and Cremonese violins are made of the same kinds of wood: maple and spruce. New analysis, however, has revealed unique indications that the wood in the older violins was chemically treated by the makers, leading researchers to suggest that ______</p>
<p>Which choice most logically completes the text?</p>`,
    answer: {
      choices: {
        A: { body: "<p>Cremonese violins probably were not considered superior to other instruments at the time they were made.</p>" },
        B: { body: "<p>the sound quality of Cremonese violins results in part from a method the craftspeople used to alter the wood.</p>" },
        C: { body: "<p>if modern violins were made of a wood other than maple or spruce, they likely would sound as good as Cremonese violins.</p>" },
        D: { body: "<p>the current process of making violins is the same process that was used centuries ago by Cremonese craftspeople.</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is the best answer because it most logically completes the text's discussion of the sound quality of Cremonese and modern violins. The text states that violins made in Cremona in the sixteenth to eighteenth centuries sound superior to modern violins. It then indicates that some experts attribute the difference to different woods being used to make these violins, but both Cremonese and modern violins are made of the same woods (maple and spruce); thus this cannot account for the difference. The text then says that recent analysis suggests the wood in Cremonese violins was chemically treated by the craftspeople who made them, thereby providing an alternate explanation for the sound differences: the chemical alteration that is present in the Cremonese violins but absent from the modern ones.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Inferences",
      difficulty: "Medium"
    }
  },
  {
    questionId: "64f87faf",
    externalId: "64f87faf",
    section: "Reading",
    prompt: `<p>In many of his sculptures, artist Richard Hunt uses broad forms rather than extreme accuracy to hint at specific people or ideas. In his first major work, <em>Arachne</em> (1956), Hunt constructed the mythical character Arachne, a weaver who was changed into a spider, by welding bits of steel together into something that, although vaguely human, is strange and machine-like. And his large bronze sculpture <em>The Light of Truth</em> (2021) commemorates activist and journalist Ida B. Wells using mainly flowing, curved pieces of metal that create stylized flame.</p>
<p>Which choice best states the text's main idea about Hunt?</p>`,
    answer: {
      choices: {
        A: { body: "<p>He often depicts the subjects of his sculptures using an unrealistic style.</p>" },
        B: { body: "<p>He uses different kinds of materials depending on what kind of sculpture he plans to create.</p>" },
        C: { body: "<p>He tends to base his art on important historical figures rather than on fictional characters.</p>" },
        D: { body: "<p>He has altered his approach to sculpture over time, and his works have become increasingly abstract.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer because it most accurately states the main idea of the text. According to the text, many of Richard Hunt's sculptures \"use broad forms rather than extreme accuracy\"—in other words, they are more abstract than realistic. To illustrate Hunt's abstract approach, the text characterizes his sculpture of Arachne as \"vaguely human\" and his work in honor of Ida B. Wells as \"using mainly flowing, curved pieces of metal that create stylized flame.\" Thus, the main idea is that Hunt often depicts the subjects of his sculptures using an unrealistic style.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Central Ideas and Details",
      difficulty: "Medium"
    }
  },
  {
    questionId: "e18e4844",
    externalId: "e18e4844",
    section: "Reading",
    prompt: `<p>The increased integration of digital technologies throughout the process of book creation in the late 20th and early 21st centuries lowered the costs of book production, but those decreased costs have been most significant in the manufacturing and distribution process, which occurs after the authoring, editing, and design of the book are complete. This suggests that in the late 20th and early 21st centuries, ______</p>
<p>Which choice most logically completes the text?</p>`,
    answer: {
      choices: {
        A: { body: "<p>digital technologies made it easier than it had been previously for authors to write very long works and get them published.</p>" },
        B: { body: "<p>customers generally expected the cost of books to decline relative to the cost of other consumer goods.</p>" },
        C: { body: "<p>publishers increased the variety of their offerings by printing more unique titles but also printed fewer copies of each title.</p>" },
        D: { body: "<p>the costs of writing, editing, and designing a book were less affected by the technologies used than were the costs of manufacturing and distributing a book.</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is the best answer because it presents the conclusion that most logically follows from the text's discussion of how digital technologies affected the process of book creation. The text explains that in the late 20th and early 21st centuries digital technologies lowered book production costs most significantly in manufacturing and distribution. The text goes on to point out that authoring, editing, and book design are distinct steps in the process that occur before manufacturing and distribution. Because the savings connected to digital technologies have been most significant in manufacturing and distribution, it's reasonable to infer that those technologies had less of an effect on writing, editing, and designing books.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Inferences",
      difficulty: "Hard"
    }
  },
  {
    questionId: "53fac9a4",
    externalId: "53fac9a4",
    section: "Reading",
    prompt: `<p>External shopping cues are a type of marketing that uses obvious messaging—a display featuring a new product, for example, or a \"buy one, get one free\" offer—to entice consumers to make spontaneous purchases. In a study, data scientist Sam K. Hui and colleagues found that this effect can also be achieved with a less obvious cue: rearranging a store's layout. The researchers explain that trying to find items in new locations causes shoppers to move through more of the store, exposing them to more products and increasing the likelihood that they'll buy an item they hadn't planned on purchasing.</p>
<p>Which response from a survey given to shoppers who made a purchase at a retail store best supports the researchers' explanation?</p>`,
    answer: {
      choices: {
        A: { body: "<p>\"I needed to buy some cleaning supplies, but they weren't in their regular place. While I was looking for them, I saw this interesting notebook and decided to buy it, too.\"</p>" },
        B: { body: "<p>\"I didn't buy everything on my shopping list today. I couldn't find a couple of the items in the store, even though I looked all over for them.\"</p>" },
        C: { body: "<p>\"The store sent me a coupon for a new brand of soup, so I came here to find out what kinds of soup that brand offers. I decided to buy a few cans because I had the coupon.\"</p>" },
        D: { body: "<p>\"This store is larger than one that's closer to where I live, and it carries more products. I came here to buy some things that the other store doesn't always have.\"</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer because it best supports the researchers' explanation of the results of rearranging a store's layout. According to the text, Sam K. Hui and colleagues found that rearranging a store's layout can encourage customers to make spontaneous purchases. The text states that the researchers explain that a change in layout causes shoppers to hunt for items' new locations, which exposes the shoppers to more products and increases the likelihood that they'll make an unplanned purchase. This quotation from a surveyed shopper indicates that the shopper spontaneously purchased a notebook while looking for cleaning supplies that weren't in their usual place. The quotation therefore supports the researchers' explanation that rearranging a store's layout can lead shoppers to make unanticipated purchases.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Medium"
    }
  },
  {
    questionId: "8e811cb0",
    externalId: "8e811cb0",
    section: "Reading",
    prompt: `<p>\"To You\" is an 1856 poem by Walt Whitman. In the poem, Whitman suggests that readers, whom he addresses directly, have not fully understood themselves, writing, ______</p>
<p>Which quotation from \"To You\" most effectively illustrates the claim?</p>`,
    answer: {
      choices: {
        A: { body: "<p>\"You have not known what you are, you have slumber'd upon yourself / all your life, / Your eyelids have been the same as closed most of the time.\"</p>" },
        B: { body: "<p>\"These immense meadows, these interminable rivers, you are immense / and interminable as they.\"</p>" },
        C: { body: "<p>\"I should have made my way straight to you long ago, / I should have blabb'd nothing but you, I should have chanted nothing / but you.\"</p>" },
        D: { body: "<p>\"I will leave all and come and make the hymns of you, / None has understood you, but I understand you.\"</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer because it presents the quotation that most directly illustrates the claim that Whitman's poem suggests that its readers haven't fully understood themselves. This quotation makes that point directly by saying to readers, \"You have not known what you are.\" The quotation goes on to reinforce this point using a metaphor of sleep, saying that readers have \"slumber'd\" and that their \"eyelids have been the same as closed most of the time.\"</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Easy"
    }
  },
  {
    questionId: "48f28116",
    externalId: "48f28116",
    section: "Reading",
    prompt: `<p>In a study by Mika R. Moran, Daniel A. Rodriguez, and colleagues, residents of Quito, Ecuador, and Lima, Peru, were surveyed about parks in their cities. Of the 618 respondents from Quito, 82.9% indicated that they use the city's parks, and of the 663 respondents from Lima, 72.7% indicated using city parks. Given that the percentage of Quito respondents who reported living within a 10-minute walk of a park was much lower than that reported by Lima respondents, greater proximity alone can't explain the difference in park use.</p>
<p>The text makes which point about the difference between the proportions of Quito residents and Lima residents using parks?</p>`,
    answer: {
      choices: {
        A: { body: "<p>It was much larger than the researchers conducting the study expected.</p>" },
        B: { body: "<p>It is caused by something other than the parks' proximity to city residents.</p>" },
        C: { body: "<p>It could be due to inaccuracies in the survey results.</p>" },
        D: { body: "<p>It was calculated using sources that predate the survey.</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is the best answer because it presents a statement about the difference between the proportions of Quito residents and Lima residents using parks that is supported by the text. The text states that 82.9% of surveyed Quito residents and 72.7% of surveyed Lima residents reported using their city's parks. The text then notes that compared to Lima respondents, a much smaller percentage of Quito respondents said they live within a 10-minute walk of a park. The text concludes that because a greater proportion of Quito respondents used parks despite generally living farther from them than Lima respondents did, \"greater proximity\"—being closer to a park—\"can't explain the difference in park use.\" That is, the text makes the point that the difference between the proportions of Quito residents and Lima residents using parks is caused by something other than the distance of the parks from city residents.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Central Ideas and Details",
      difficulty: "Medium"
    }
  },
  {
    questionId: "dd581cac",
    externalId: "dd581cac",
    section: "Reading",
    prompt: `<p><em>Hevea brasiliensis</em>, a tree in the Amazon rainforest, is the world's main source of natural rubber. The tree produces a milky substance called latex that is used to make rubber. The bark of <em>Hevea brasiliensis</em> is helpful for the process of making rubber because it has a unique structure that makes it easy to collect latex. A network of tubes in the tree's inner bark helps the latex to flow out easily when people make small cuts into the bark.</p>
<p>What feature of <em>Hevea brasiliensis</em> does the text say is helpful for the process of making rubber?</p>`,
    answer: {
      choices: {
        A: { body: "<p>Its latex produces rubber of an especially high quality.</p>" },
        B: { body: "<p>Its bark has a unique structure that makes it easy to collect latex.</p>" },
        C: { body: "<p>It is able to grow in a wide variety of climates around the world.</p>" },
        D: { body: "<p>It is one of only two trees in the Amazon that produce latex.</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is the best answer because it most accurately states what feature of Hevea brasiliensis is helpful for the process of making rubber. According to the text, this tree species produces latex, which is used to make rubber, and its inner bark contains a \"network of tubes\" that, when cut, enables the latex to flow out. The text explicitly states that this feature of Hevea brasiliensis is \"helpful for the process of making rubber.\"</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Central Ideas and Details",
      difficulty: "Easy"
    }
  },
  {
    questionId: "865d6194",
    externalId: "865d6194",
    section: "Reading",
    prompt: `<p>The ancient writing system used in the Maya kingdoms of southern Mexico and Central America had a symbol for the number zero. The earliest known example of the symbol dates to more than 2,000 years ago. At that time, almost none of the writing systems elsewhere in the world possessed a zero symbol. And the use of zero in Mexico and Central America may be even more ancient. Some historians suggest that Maya mathematicians inherited it from the Olmec civilization, which flourished in the region 2,400–3,600 years ago.</p>
<p>According to the text, what do some historians suggest about Maya civilization?</p>`,
    answer: {
      choices: {
        A: { body: "<p>Maya civilization acquired the use of zero from the Olmec civilization.</p>" },
        B: { body: "<p>Maya civilization respected its historians more than it respected its mathematicians.</p>" },
        C: { body: "<p>Maya civilization was highly secretive about its intellectual achievements.</p>" },
        D: { body: "<p>Maya civilization tried to introduce its writing system to other civilizations.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer because it presents information about Maya civilization that is supported by the text. The text states that the writing system used in the Maya kingdoms had a symbol for the number zero. It goes on to say that at the time of the zero symbol's earliest example, more than 2,000 years ago, almost no other writing systems in the world featured such a symbol. The text also points out that some historians suggest that Maya mathematicians inherited the use of zero from the Olmec civilization, which existed in the same area as the Maya civilization at an earlier date. Thus, according to the text, some historians suggest that the Maya civilization acquired the use of zero from the Olmec civilization.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Central Ideas and Details",
      difficulty: "Medium"
    }
  },
  {
    questionId: "45391bbf",
    externalId: "45391bbf",
    section: "Reading",
    prompt: `<p>As a monthly newsletter formed in 1969 by a group of Asian American students at the University of California, Los Angeles, <em>Gidra</em> helped raise awareness about social and political issues concerning the Asian American community on campus and at large. The newsletter had an expansive reach for a publication of its kind: around 4,000 copies were published each month. A student writing a history paper, however, hypothesizes that <em>Gidra</em>'s influence cannot be measured by the number of newsletters published monthly alone.</p>
<p>Which finding, if true, would most directly support the student's hypothesis?</p>`,
    answer: {
      choices: {
        A: { body: "<p>The students who initially formed <em>Gidra</em> each contributed financially to its creation.</p>" },
        B: { body: "<p>In addition to covering current events, <em>Gidra</em> also featured works of art and literature.</p>" },
        C: { body: "<p><em>Gidra</em> was initially based out of the Asian American Studies Center at UCLA.</p>" },
        D: { body: "<p>People would often give their copies of <em>Gidra</em> to others once they had finished reading an issue.</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is the best answer. If there were more Gidra readers than there were copies of the newsletter, then the newsletter's influence would be much greater than its 4,000 monthly copies.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Easy"
    }
  },
  {
    questionId: "af45dc3f",
    externalId: "af45dc3f",
    section: "Reading",
    prompt: `<p>Many animals, including humans, must sleep, and sleep is known to have a role in everything from healing injuries to encoding information in long-term memory. But some scientists claim that, from an evolutionary standpoint, deep sleep for hours at a time leaves an animal so vulnerable that the known benefits of sleeping seem insufficient to explain why it became so widespread in the animal kingdom. These scientists therefore imply that ______</p>
<p>Which choice most logically completes the text?</p>`,
    answer: {
      choices: {
        A: { body: "<p>prolonged deep sleep is likely advantageous in ways that have yet to be discovered.</p>" },
        B: { body: "<p>most traits perform functions that are hard to understand from an evolutionary standpoint.</p>" },
        C: { body: "<p>it is more important to understand how widespread prolonged deep sleep is than to understand its function.</p>" },
        D: { body: "<p>many traits that provide significant benefits for an animal also likely pose risks to that animal.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer. It most logically completes the text. The text says that some scientists can't explain why prolonged deep sleep is so widespread, given that the known benefits of sleep don't seem to make up for how vulnerable it leaves an animal. This suggests that prolonged deep sleep probably has unknown evolutionary benefits that make up for the vulnerability.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Inferences",
      difficulty: "Hard"
    }
  },
  {
    questionId: "b74860b2",
    externalId: "b74860b2",
    section: "Reading",
    prompt: `<p>A member of the Otomi, an Indigenous people in Central Mexico, Octavio Medellín immigrated to the United States as a child, and his sculpture bears the impress of traditions on both sides of the border: US-based modernist sculpture, Mexican modernist painting, Otomi art, and the ancient sculpture of other Mexican Indigenous peoples, including the Maya. In his 1950 masterpiece <em>History of Mexico</em>, Medellín fuses these influences into a style so idiosyncratic that it resists efforts to view his work through the lens of nationality or cultural identity. Artists, he insisted, should strive for individual expression, even as they draw inspiration from their heritage and the communities where they live and work.</p>
<p>Which quotation from an art critic most directly challenges the underlined claim in the text?</p>`,
    answer: {
      choices: {
        A: { body: "<p>\"Although a number of ancient Indigenous artistic traditions pictured human forms in profile, the forms populating the surface of <em>A History of Mexico</em> suggest a specifically Maya influence.\"</p>" },
        B: { body: "<p>\"In <em>A History of Mexico</em>, the synthesis of ancient and modernist traditions functions as a stylistic parallel to the work's subject matter: a survey of centuries of Mexican history.\"</p>" },
        C: { body: "<p>\"Many critics focus on Indigenous influences in <em>A History of Mexico</em> and other key works by Medellín to the exclusion of influences from non-Indigenous art.\"</p>" },
        D: { body: "<p>\"While <em>A History of Mexico</em> features modernist motifs, it relies primarily on angular human forms in profile—a staple of Maya sculpture—and thus invites classification as Indigenous art.\"</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is the best answer. This critic challenges the claim by arguing that A History of Mexico is not so idiosyncratic (unique) as to resist classification because its use of Maya-style human profiles actually \"invites classification as Indigenous art.\" Therefore, according to this critic, the work can be viewed, at least partially, through a lens of national or cultural identity.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Hard"
    }
  },
  {
    questionId: "7c196241",
    externalId: "7c196241",
    section: "Reading",
    prompt: `<p>In the mountains of Brazil, <em>Barbacenia tomentosa</em> and <em>Barbacenia macrantha</em>—two plants in the Velloziaceae family—establish themselves on soilless, nutrient-poor patches of quartzite rock. Plant ecologists Anna Abrahão and Patricia de Britto Costa used microscopic analysis to determine that the roots of <em>B. tomentosa</em> and <em>B. macrantha</em>, which grow directly into the quartzite, have clusters of fine hairs near the root tip; further analysis indicated that these hairs secrete both malic and citric acids. The researchers hypothesize that the plants depend on dissolving underlying rock with these acids, as the process not only creates channels for continued growth but also releases phosphates that provide the vital nutrient phosphorus.</p>
<p>Which finding, if true, would most directly support the researchers' hypothesis?</p>`,
    answer: {
      choices: {
        A: { body: "<p>Other species in the Velloziaceae family are found in terrains with more soil but have root structures similar to those of <em>B. tomentosa</em> and <em>B. macrantha</em>.</p>" },
        B: { body: "<p>Though <em>B. tomentosa</em> and <em>B. macrantha</em> both secrete citric and malic acids, each species produces the acids in different proportions.</p>" },
        C: { body: "<p>The roots of <em>B. tomentosa</em> and <em>B. macrantha</em> carve new entry points into rocks even when cracks in the surface are readily available.</p>" },
        D: { body: "<p><em>B. tomentosa</em> and <em>B. macrantha</em> thrive even when transferred to the surfaces of rocks that do not contain phosphates.</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is the best answer because it presents a finding that, if true, would support the researchers' hypothesis about the plants' dependence on dissolving rock. The text indicates that the roots of the two plant species grow directly into quartzite rock, where hairs on the roots secrete acids that dissolve the rock. The researchers hypothesize that the plants depend on this process because dissolving rock opens spaces for the roots to grow and releases phosphates that provide the plants with phosphorus, a vital nutrient. If the plants carry out this process of dissolving rock even when the rock already has spaces into which the roots could grow, that would support the researchers' hypothesis because it suggests that the plants are getting some advantage—such as access to phosphorus—from the action of dissolving rock. If the plants don't benefit from dissolving rock, they would be expected to grow in the cracks that already exist, as doing so would mean that the plants don't have to spend energy creating and secreting acids; if, however, the plants create new entry points by dissolving rock even when cracks already exist, that would support the hypothesis that they depend on dissolving rock for some benefit.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Hard"
    }
  },
  {
    questionId: "183bd6b1",
    externalId: "183bd6b1",
    section: "Reading",
    prompt: `<p>When fashion designer Lloyd Henri Kiva New opened his store in Scottsdale, Arizona, in 1945, he quickly became known for creating delicately crafted leather goods, like belts and hats. He was perhaps most renowned for his colorful handbags, which he made by hand using a long and painstaking process. As he gained more customers, New began using sewing machines and other tools to help him produce bags more efficiently, though he continued to handcraft the crucial details that made each bag unique.</p>
<p>Based on the text, what would have been the most likely consequence if New had not begun using sewing machines?</p>`,
    answer: {
      choices: {
        A: { body: "<p>He would have been unable to ensure that each bag included unique, handcrafted details.</p>" },
        B: { body: "<p>He would have struggled to meet the increasing demand for his bags.</p>" },
        C: { body: "<p>He would have had to individually design each bag he produced.</p>" },
        D: { body: "<p>He would not have been able to generate as much interest in his bags.</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is the best answer because it presents the most likely consequence if New had not begun using sewing machines. The text states that New gained new customers and that sewing machines allowed him to make bags more efficiently, or in less time than he could when sewing by hand. It's reasonable to conclude that if New hadn't reduced the time it took to make each bag by starting to use sewing machines, it would have been hard for him to keep up with the increased demand.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Central Ideas and Details",
      difficulty: "Easy"
    }
  },
  {
    questionId: "c1f1a631",
    externalId: "c1f1a631",
    section: "Reading",
    prompt: `<p>Modern dog breeds are largely the result of 160 years of owners crossbreeding certain dogs in order to select for particular physical appearances. Owners often say that some breeds are also more likely than others to have particular personality traits—basset hounds are affectionate; boxers are easy to train—but Kathleen Morrill and colleagues found through a combination of owner surveys and DNA sequencing of 2,000 dogs that while physical traits are predictably heritable among purebred dogs, behavior varies widely among dogs of the same breed.</p>
<p>Which choice best states the main idea of the text?</p>`,
    answer: {
      choices: {
        A: { body: "<p>Dog breeds would not exist without many years of human intervention in dogs' reproduction.</p>" },
        B: { body: "<p>Research fails to confirm a commonly held belief about dog breeds and behavior.</p>" },
        C: { body: "<p>The dog breeds most popular among owners have often changed over the past 160 years.</p>" },
        D: { body: "<p>A study of dog breeds is notable for its usage of both opinion surveys and DNA sequencing.</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is the best answer because it most accurately states the main idea of the text. The text indicates that dog owners typically claim that some dog breeds are \"more likely than others to have particular personality traits.\" In other words, the text points out that a commonly held belief about dog breeds is that their personality traits are heritable. The text then states that Kathleen Morrill and colleagues undertook research about dog trait heritability and found that \"behavior varies widely among dogs of the same breed.\" Because Morrill and colleagues found evidence for variability rather than consistency in the behavior of dogs of the same breed, the statement that research fails to uphold a commonly held belief about dog breeds and behavior accurately reflects the main idea of the text.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Central Ideas and Details",
      difficulty: "Hard"
    }
  },
  {
    questionId: "65462442",
    externalId: "65462442",
    section: "Reading",
    prompt: `<p>Swahili Speakers in Three African Countries</p>
<table>
<tr><th>Country</th><th>Approximate number of speakers (in millions)</th><th>Estimated % of population</th></tr>
<tr><td>Democratic Republic of the Congo</td><td>22</td><td>25</td></tr>
<tr><td>Kenya</td><td>55</td><td>100</td></tr>
<tr><td>Tanzania</td><td>61</td><td>100</td></tr>
</table>
<p>Swahili is estimated to be the first language of up to 15 million people worldwide. It's also an officially recognized language in Tanzania, Kenya, and the Democratic Republic of the Congo, which means these countries use Swahili in government documents and proceedings. But even in countries where almost everyone speaks Swahili, for many it isn't their first language but is instead their second, third, or even fourth language.</p>
<p>Which choice most effectively uses data from the table to support the underlined claim?</p>`,
    answer: {
      choices: {
        A: { body: "<p>Tanzania has approximately 61 million Swahili speakers, which is much more than the estimated total number of people worldwide for whom Swahili is their first language.</p>" },
        B: { body: "<p>Tanzania is estimated to have at most 15 million Swahili speakers, while the country's total population is approximately 61 million people.</p>" },
        C: { body: "<p>Approximately 100 percent of the people who speak Swahili as their first language live in Kenya, which has a total population of approximately 55 million people.</p>" },
        D: { body: "<p>Approximately 100 percent of Kenya's population speaks Swahili, while only about 25 percent of the Democratic Republic of the Congo's population speaks Swahili.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer because it most effectively uses data from the table to support the underlined claim. The text indicates that Swahili is the first language of up to 15 million people worldwide. The text goes on to claim, in the underlined portion, that even in countries where nearly everyone speaks Swahili, many of the language's speakers don't have Swahili as their first language. The table indicates that 61 million people in Tanzania, which amounts to 100 percent of the population, speak Swahili. If 61 million people in Tanzania speak Swahili, but only 15 million people worldwide have Swahili as their first language, that means there are many people in Tanzania who speak Swahili as a language other than their first language. This information about Swahili speakers in Tanzania therefore supports the claim that many Swahili speakers in countries where nearly everyone speaks Swahili speak it as a language other than their first language (such as their second, third, or fourth language).</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Hard"
    }
  },
  {
    questionId: "e48f2f19",
    externalId: "e48f2f19",
    section: "Reading",
    prompt: `<p>In the 1960s, Gloria Richardson led a movement to promote racial equality. Her involvement in this effort was inspired by her daughter, Donna Richardson. In 1961, Donna joined protests organized by the Student Nonviolent Coordinating Committee in Cambridge, Maryland. Following her daughter, Gloria joined these protests too. Gloria soon became the cochair of the Cambridge Nonviolent Action Committee. She was also the leader of what became known as the Cambridge movement.</p>
<p>According to the text, what did Gloria Richardson lead?</p>`,
    answer: {
      choices: {
        A: { body: "<p>The Cambridge movement</p>" },
        B: { body: "<p>Her daughter Donna's high school</p>" },
        C: { body: "<p>Protests to support environmental protections</p>" },
        D: { body: "<p>A new business in Cambridge, Maryland</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer because it presents information about Gloria Richardson that is supported by the text. The text provides a number of details about Gloria's involvement in efforts to promote racial equality, including that she was the leader of what became known as the Cambridge movement.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Central Ideas and Details",
      difficulty: "Easy"
    }
  },
  {
    questionId: "8fc5d12b",
    externalId: "8fc5d12b",
    section: "Reading",
    prompt: `<p>Red velvet cake has been a favorite dessert of many for years, but the recipe's origins are unclear. A bakery in Dallas, Texas, argued that it created the first recipe for the cake when the bakery opened in the 1860s. The Adams Extract Co., which sells baking products, claims to have created the recipe in the 1930s to help market their red dye. A US hotel and a Canadian department store also publicly stated that the red velvet cake sold in each of their establishments in the 1930s was an original creation, each alleging that it was the recipe author. No clear evidence has emerged to favor one of these claims over the others, however. It thus seems that ______</p>
<p>Which choice most logically completes the text?</p>`,
    answer: {
      choices: {
        A: { body: "<p>red velvet cake was first baked sometime before the 1860s.</p>" },
        B: { body: "<p>we cannot say at present who actually baked the first red velvet cake.</p>" },
        C: { body: "<p>none of the supposed inventors of red velvet cake are likely to have invented it.</p>" },
        D: { body: "<p>the bakery in Dallas, Texas, probably invented red velvet cake.</p>" }
      },
      correctChoice: "B",
      style: "Multiple Choice",
      rationale: "<p>Choice B is the best answer because it presents the conclusion that most logically completes the text's discussion of competing claims about the origins of red velvet cake. The text states that the origins of the recipe for red velvet cake \"are unclear.\" The text then presents four different entities that claim to have created the first red velvet cake recipe: a Dallas bakery (1860s), the Adams Extract Co. (1930s), a US hotel (1930s), and a Canadian department store (1930s). Lastly, the text states that \"no clear evidence has emerged to favor one of these claims over the others.\" Given this information, it most logically follows that it's not possible to determine who baked the first red velvet cake, as there is insufficient evidence to determine which claim, if any, is correct.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Inferences",
      difficulty: "Medium"
    }
  },
  {
    questionId: "7fa2cfb0",
    externalId: "7fa2cfb0",
    section: "Reading",
    prompt: `<p>Guilds in French Cities in the Late Eighteenth Century</p>
<table>
<tr><th>City</th><th>Date</th><th>Inhabitants</th><th>Number of guilds</th><th>Inhabitants per guild</th></tr>
<tr><td>Paris</td><td>1766</td><td>600,000</td><td>133</td><td>4,511</td></tr>
<tr><td>Bordeaux</td><td>1762</td><td>80,000</td><td>49</td><td>1,633</td></tr>
<tr><td>Rouen</td><td>1775</td><td>74,000</td><td>112</td><td>661</td></tr>
<tr><td>Lyon</td><td>1789</td><td>143,000</td><td>72</td><td>1,986</td></tr>
</table>
<p>Guilds—local associations of artisans and merchants in the same industry—were widespread in France from the medieval period until the late eighteenth century. But guilds were much more numerous relative to the population in some cities than in others: for example, ______</p>
<p>Which choice most effectively uses data from the table to complete the statement?</p>`,
    answer: {
      choices: {
        A: { body: "<p>there were 49 guilds in Bordeaux but 72 guilds in Lyon despite the two cities having nearly equal numbers of inhabitants.</p>" },
        B: { body: "<p>Lyon had far fewer inhabitants than Paris did but had many more guilds.</p>" },
        C: { body: "<p>there was one guild for every 661 inhabitants in Rouen but one guild for every 4,511 inhabitants in Paris.</p>" },
        D: { body: "<p>Paris had 133 guilds and 600,000 inhabitants, or one guild for every 4,511 inhabitants.</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is the best answer. The claim we're trying to prove is that guilds were much more numerous relative to population in some cities than others. This choice describes the guilds per number of inhabitants in two cities (Rouen and Paris), showing significant differences between guilds relative to population in these cities.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Easy"
    }
  },
  {
    questionId: "734e6112",
    externalId: "734e6112",
    section: "Reading",
    prompt: `<p>Characteristics of Five Recently Discovered Gas Exoplanets</p>
<table>
<tr><th>Exoplanet designation</th><th>Mass (Jupiters)</th><th>Radius (Jupiters)</th><th>Orbital period (days)</th><th>Distance from the Sun (parsecs)</th></tr>
<tr><td>TOI-640 b</td><td>0.88</td><td>1.771</td><td>5.003</td><td>340</td></tr>
<tr><td>TOI-1601 b</td><td>0.99</td><td>1.239</td><td>5.331</td><td>336</td></tr>
<tr><td>TOI-628 b</td><td>6.33</td><td>1.060</td><td>3.409</td><td>178</td></tr>
<tr><td>TOI-1478 b</td><td>0.85</td><td>1.060</td><td>10.180</td><td>153</td></tr>
<tr><td>TOI-1333 b</td><td>2.37</td><td>1.396</td><td>4.720</td><td>200</td></tr>
</table>
<p>\"Hot Jupiters\" are gas planets that have a mass of at least 0.25 Jupiters (meaning that their mass is at least 25% of that of Jupiter) and an orbital period of less than 10 days (meaning that they complete one orbit around their star in less than 10 days), while \"warm Jupiters\" are gas planets that meet the same mass criterion but have orbital periods of more than 10 days. In 2021, Michigan State University astronomer Joseph Rodriguez and colleagues announced the discovery of five new gas exoplanets and asserted that four are hot Jupiters and one is a warm Jupiter.</p>
<p>Which choice best describes data from the table that support Rodriguez and colleagues' assertion?</p>`,
    answer: {
      choices: {
        A: { body: "<p>None of the planets have an orbital period of more than 10 days, and TOI-628 b has a mass of 6.33 Jupiters.</p>" },
        B: { body: "<p>TOI-1478 b has an orbital period of 153 days, and the masses of all the planets range from 0.85 to 6.33 Jupiters.</p>" },
        C: { body: "<p>All the planets have a radius between 1.060 and 1.771 Jupiters, and only TOI-1333 b has an orbital period of more than 10 days.</p>" },
        D: { body: "<p>Each of the planets has a mass greater than 0.25 Jupiters, and all except for TOI-1478 b have an orbital period of less than 10 days.</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is the best answer because it accurately describes data from the table that support Rodriguez and colleagues' assertion about the classifications of the five new gas exoplanets. The text describes two categories of gas planets: hot Jupiters, which have a mass of at least 0.25 Jupiters and an orbital period of less than 10 days, and warm Jupiters, which have the same mass characteristic but have orbital periods of more than 10 days. According to the table, four of the gas exoplanets discovered by Rodriguez and colleagues have a mass of at least 0.25 Jupiters and an orbital period of less than 10 days, while one of the planets has a mass of at least 0.25 Jupiters and an orbital period of more than 10 days. These data therefore support Rodriguez and colleagues' assertion that four of the new exoplanets are hot Jupiters and one is a warm Jupiter.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Medium"
    }
  },
  {
    questionId: "58b90851",
    externalId: "58b90851",
    section: "Reading",
    prompt: `<p>In 1934 physicist Eugene Wigner posited the existence of a crystal consisting entirely of electrons in a honeycomb-like structure. The so-called Wigner crystal remained largely conjecture, however, until Feng Wang and colleagues announced in 2021 that they had captured an image of one. The researchers trapped electrons between two semiconductors and then cooled the apparatus, causing the electrons to settle into a crystalline structure. By inserting an ultrathin sheet of graphene above the crystal, the researchers obtained an impression—the first visual confirmation of the Wigner crystal.</p>
<p>Which choice best states the main idea of the text?</p>`,
    answer: {
      choices: {
        A: { body: "<p>Researchers have obtained the most definitive evidence to date of the existence of the Wigner crystal.</p>" },
        B: { body: "<p>Researchers have identified an innovative new method for working with unusual crystalline structures.</p>" },
        C: { body: "<p>Graphene is the most important of the components required to capture an image of a Wigner crystal.</p>" },
        D: { body: "<p>It's difficult to acquire an image of a Wigner crystal because of the crystal's honeycomb structure.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer because it most accurately states the main idea of the text. According to the text, Eugene Wigner hypothesized that a crystal could exist that would be composed of electrons and have a honeycomb-like shape. The text goes on to say that the existence of the Wigner crystal remained unconfirmed until Feng Wang and colleagues were able to make an impression of one using two semiconductors and an ultrathin sheet of graphene. Thus, the main idea is that researchers have obtained the most definitive evidence to date of the existence of the Wigner crystal.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Central Ideas and Details",
      difficulty: "Medium"
    }
  },
  {
    questionId: "94da9acc",
    externalId: "94da9acc",
    section: "Reading",
    prompt: `<p>In the \"language nest\" model of education, Indigenous children learn the language of their people by using it as the medium of instruction and socialization at pre-K or elementary levels. In their 2016 study of a school in an Anishinaabe community in Ontario, Canada, scholars Lindsay Morcom and Stephanie Roy (who are Anishinaabe themselves) found that the model not only imparted fluency in the Anishinaabe language but also enhanced students' pride in Anishinaabe culture overall. Given these positive effects, Morcom and Roy predict that the model increases the probability that as adults, former students of the school will transmit the language to younger generations in their community.</p>
<p>Which finding, if true, would most strongly support the researchers' prediction?</p>`,
    answer: {
      choices: {
        A: { body: "<p>Anishinaabe adults who didn't attend the school feel roughly the same degree of cultural pride as the former students of the school feel.</p>" },
        B: { body: "<p>After transferring to the school, new students experience an increase in both fluency and academic performance overall.</p>" },
        C: { body: "<p>As adults, former students of the school are just as likely to continue living in their community as individuals who didn't attend the school.</p>" },
        D: { body: "<p>As they complete secondary and higher education, former students of the school experience no loss of fluency or cultural pride.</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is the best answer because it presents a finding that, if true, would support the researchers' prediction about the language nest model of education. The text states that Morcom and Roy studied the effects of the language nest model of education on students at an Anishinaabe school, and they found that the model—which is used with students during pre-K or elementary school—increased students' fluency in the Anishinaabe language and pride in Anishinaabe culture. The researchers predicted that the students' positive early experiences with the Anishinaabe language would lead them to be more likely to later share the language with younger generations. If former students maintain full fluency and cultural pride after finishing secondary and higher education, it follows that they would be both able and motivated to share what they know with others; this would likely result in a higher probability of transmitting the language to younger generations, as the researchers predict.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Hard"
    }
  },
  {
    questionId: "8b1ab636",
    externalId: "8b1ab636",
    section: "Reading",
    prompt: `<p>In 1967 the US Congress created the Corporation for Public Broadcasting, which in turn created National Public Radio (NPR). NPR began producing and distributing high-quality news and cultural programming to affiliate stations across the United States in 1971. In a research paper, a student claims that the Corporation for Public Broadcasting and NPR were inspired by the British Broadcasting System (BBC), which had been established in the 1920s.</p>
<p>Which quotation from a work by a historian would be the most effective evidence for the student to include in support of this claim?</p>`,
    answer: {
      choices: {
        A: { body: "<p>\"Although the BBC had begun as a private corporation, politicians successfully argued to make it a public company because they believed a public broadcaster could help build national unity in the aftermath of World War I.\"</p>" },
        B: { body: "<p>\"For many decades, the BBC had no competition since it held Britain's only broadcasting license, whereas in the United States, the Corporation for Public Broadcasting launched NPR in a broadcasting market already filled with competitors.\"</p>" },
        C: { body: "<p>\"Congress's embrace of publicly funded broadcasting reflected a common belief among US politicians that the role of government was not only to ensure people's safety and liberty but also to enrich people's lives in other ways.\"</p>" },
        D: { body: "<p>\"The goal of the BBC was to support British democracy by promoting an informed citizenry, and US legislators believed that ensuring access to high-quality programming could do the same for democracy in the United States.\"</p>" }
      },
      correctChoice: "D",
      style: "Multiple Choice",
      rationale: "<p>Choice D is the best answer because this quotation would be the most effective evidence to include in support of the claim that the Corporation for Public Broadcasting and NPR were inspired by the British Broadcasting System (BBC). The quotation states that the goal of the BBC was to support British democracy and that US legislators believed high-quality programming could accomplish the same goal for democracy in the United States. In other words, US legislators looked to the BBC as a model, taking direct inspiration from it when they created the Corporation for Public Broadcasting, which in turn created NPR.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Medium"
    }
  },
  {
    questionId: "eb57012b",
    externalId: "eb57012b",
    section: "Reading",
    prompt: `<p>The following text is from David Barclay Moore's 2022 novel <em>Holler of the Fireflies</em>. The narrator has just arrived at summer camp, which is far away from his home.</p>
<p>This place was different than I thought it would be. I'd never been somewhere like this before. I did feel scared, but also excited.</p>
<p>According to the text, how does the narrator feel about being at summer camp?</p>`,
    answer: {
      choices: {
        A: { body: "<p>He feels overjoyed.</p>" },
        B: { body: "<p>He feels peaceful.</p>" },
        C: { body: "<p>He feels both scared and excited.</p>" },
        D: { body: "<p>He feels both angry and jealous.</p>" }
      },
      correctChoice: "C",
      style: "Multiple Choice",
      rationale: "<p>Choice C is the best answer because it most accurately states how the narrator feels about being at summer camp. In the text, the narrator states that after arriving at the camp, he found it to be different than he'd expected and that as a result, he felt \"scared, but also excited.\"</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Central Ideas and Details",
      difficulty: "Easy"
    }
  },
  {
    questionId: "1158b217",
    externalId: "1158b217",
    section: "Reading",
    prompt: `<p>Compiled in the late 1500s largely through the efforts of Indigenous scribes, <em>Cantares Mexicanos</em> is the most important collection of poetry in Classical Nahuatl, the principal language of the Aztec Empire. The poems portray Aztec society before the occupation of the empire by the army of Spain, and marginal notes in <em>Cantares Mexicanos</em> indicate that much of the collection's content predates the initial invasion. Nonetheless, some of the poems contain inarguable references to beliefs and customs common in Spain during this era. Thus, some scholars have concluded that ______</p>
<p>Which choice most logically completes the text?</p>`,
    answer: {
      choices: {
        A: { body: "<p>while its content largely predates the invasion, <em>Cantares Mexicanos</em> also contains additions made after the invasion.</p>" },
        B: { body: "<p>although those who compiled <em>Cantares Mexicanos</em> were fluent in Nahuatl, they had limited knowledge of the Spanish language.</p>" },
        C: { body: "<p>before the invasion by Spain, the poets of the Aztec Empire borrowed from the literary traditions of other societies.</p>" },
        D: { body: "<p>the references to beliefs and customs in Spain should be attributed to a coincidental resemblance between the societies of Spain and the Aztec Empire.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer because it most logically completes the text. The text explains that the Cantares Mexicanos contains poems about the Aztec Empire from before the Spanish invasion. Furthermore, it indicates that notes in the collection attest that some of these poems predate the Spanish invasion, while some customs depicted are likely Spanish in origin. The implication is that some poems were composed before the invasion but the references to Spanish customs could have come about only after the invasion, and thus that the collection includes content that predates the invasion and also content from after the invasion.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Inferences",
      difficulty: "Hard"
    }
  },
  {
    questionId: "6a94c678",
    externalId: "6a94c678",
    section: "Reading",
    prompt: `<p>Three Studies' Estimated Average Velocity of LMC</p>
<table>
<tr><th>Researchers</th><th>Study year</th><th>Estimated average velocity</th></tr>
<tr><td>Murai and Fujimoto</td><td>1980</td><td>344 km/s</td></tr>
<tr><td>Kallivayalil and colleagues</td><td>2006</td><td>378 km/s</td></tr>
<tr><td>Gardiner and colleagues</td><td>1994</td><td>297 km/s</td></tr>
</table>
<p>In 2006, Nitya Kallivayalil and colleagues calculated the most accurate estimate yet of the average velocity (in kilometers per second) of the Large Magellanic Cloud (LMC) galaxy. Before the 2006 study, estimates of the average velocity were low enough for the LMC to maintain an orbit around the Milky Way galaxy, but according to an analysis by Gurtina Besla and colleagues, the estimated velocity from the 2006 study is too high for the LMC to maintain such an orbit. Therefore, if Besla and colleagues are correct, the maximum average velocity for the LMC that would allow it to maintain orbit around the Milky Way is likely ______</p>
<p>Which choice most effectively uses data from the table to complete the statement?</p>`,
    answer: {
      choices: {
        A: { body: "<p>above 344 km/s but below 378 km/s.</p>" },
        B: { body: "<p>above 297 km/s but below 344 km/s.</p>" },
        C: { body: "<p>above 378 km/s.</p>" },
        D: { body: "<p>below 297 km/s.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer because it uses data from the table to give the range of velocities for the LMC from the 1980 value (344 km/s) to the 2006 value (378 km/s), thereby effectively completing the text. The text indicates that before 2006, all the estimated velocities of the LMC were within the range necessary to maintain orbit around the Milky Way galaxy. It then indicates that, according to Besla and colleagues, the 2006 estimate of 378 km/s is too high to maintain that orbit. This strongly implies that if the 1980 value (344 km/s) is below the orbital threshold, and if Besla and colleagues are correct that the 2006 value (378 km/s) is above that threshold, the maximum orbital velocity for the LMC must be somewhere in the range from above 344 km/s to below 378 km/s.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Command of Evidence",
      difficulty: "Hard"
    }
  },
  {
    questionId: "44a7fb0e",
    externalId: "44a7fb0e",
    section: "Reading",
    prompt: `<p>With the ongoing expansion of e-commerce, consumers are expecting faster and faster delivery of goods, but delivery companies continue to struggle with last-mile logistics (the final step in delivery to consumers) due to challenges such as complex and inefficient delivery routes. Innovations to mitigate these challenges have been emerging—the use of aerial drones, for example—but these innovations tend to engender their own complications (e.g., regulations on the use of drones in residential airspace), leading researchers to conclude that ______</p>
<p>Which choice most logically completes the text?</p>`,
    answer: {
      choices: {
        A: { body: "<p>consumers' expectations for reduced delivery times may be outstripping what is viable for delivery companies to provide.</p>" },
        B: { body: "<p>a better understanding of consumers' expectations for delivery is needed so that companies can better plan for fluctuations in delivery volume.</p>" },
        C: { body: "<p>rapid delivery is a leading factor in consumer satisfaction, and therefore delivery companies would benefit from investing resources in reducing delivery times.</p>" },
        D: { body: "<p>there may not be sufficient incentive for delivery companies to attempt to solve the problems associated with last-mile logistics.</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer because it most logically completes the text's discussion of consumer expectations and the struggles delivery companies face. The text states that while consumers expect ever-faster delivery of goods, delivery companies \"continue to struggle with last-mile logistics.\" The text further explains that innovations aimed at addressing this challenge have a tendency to cause complications of their own. Because escalating consumer demands for speed are paired with persistent, complex delivery obstacles and new problems arising from attempted solutions, it logically follows that consumer expectations for delivery times may be exceeding what companies can feasibly provide.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Inferences",
      difficulty: "Hard"
    }
  },
  {
    questionId: "b8ee13cc",
    externalId: "b8ee13cc",
    section: "Reading",
    prompt: `<p>In 2014, Amelia Quon and her team at NASA set out to build a helicopter capable of flying on Mars. Because Mars's atmosphere is only one percent as dense as Earth's, the air of Mars would not provide enough resistance to the rotating blades of a standard helicopter for the aircraft to stay aloft. For five years, Quon's team tested designs in a lab that mimicked Mars's atmospheric conditions. The craft the team ultimately designed can fly on Mars because its blades are longer and rotate faster than those of a helicopter of the same size built for Earth.</p>
<p>According to the text, why would a helicopter built for Earth be unable to fly on Mars?</p>`,
    answer: {
      choices: {
        A: { body: "<p>Because Mars and Earth have different atmospheric conditions</p>" },
        B: { body: "<p>Because the blades of helicopters built for Earth are too large to work on Mars</p>" },
        C: { body: "<p>Because the gravity of Mars is much weaker than the gravity of Earth</p>" },
        D: { body: "<p>Because helicopters built for Earth are too small to handle the conditions on Mars</p>" }
      },
      correctChoice: "A",
      style: "Multiple Choice",
      rationale: "<p>Choice A is the best answer because it presents an explanation about a helicopter that is directly supported by the text. The text states that Mars's atmosphere is much less dense than Earth's, and as a result, the air on Mars doesn't provide the resistance required to support the blades of a helicopter built for Earth and to keep the helicopter aloft. In other words, a helicopter built for Earth can't fly on Mars because of the differences in the two planets' atmospheres.</p>"
    },
    metadata: {
      domain: "Information and Ideas",
      skill: "Central Ideas and Details",
      difficulty: "Easy"
    }
  }
];

// Write each question to a separate JSON file
let count = 0;
for (const question of questions) {
  const filename = `${question.questionId}.json`;
  const filepath = path.join(outputDir, filename);

  fs.writeFileSync(filepath, JSON.stringify(question, null, 2));
  count++;
  console.log(`Created: ${filename}`);
}

console.log(`\nTotal questions processed: ${count}`);
