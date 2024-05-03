# LVDE-OL-MNER-FRONTEND
Front end for using a Medical Named Entity Recognition Model in a production setting

---

## Medical NER model in continuous feedback system
Named Entity Recognition (NER) has a lot of potential in the medical health industry. For finding diagnoses when combined with negation detection to turning free text into structured data, if any medical institution has textual medical data, NER can and will come in handy at some point. However, as with all AI powered solutions, they can (and most likely will) make mistakes from time to time. Having the ability to correct these mistakes is vital to ensure quality of outcome.
What I'm proposing is a full stack web application that allows for continuous feedback on model performance in a live production setting. Users will be able to correct mistakes made by the model in a user-friendly manner and submit them so that the next time the annotated document gets requested, the correct information is displayed. It will track changes made to any document (either by users or AI models) in a change log. To better illustrate this, I've made the following visualization (click this link for a higher quality upload to YouTube).

TODO: add illustration