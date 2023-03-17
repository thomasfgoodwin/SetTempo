# SetTempo
MediaMonkey script to set Tempo field from known BPM. 

Operates on selected files. Available from "Tools>Edit tags" and as toolbar button

Tested in MediaMonkey 5.0.4.2690 on Windows 10

## Installation
Download and double-click SetTempo.mmip .
Toolbar button is available as "General:SetTempo"

## Breakpoints
- Largo <= 60
- Larghetto <= 66
- Adagio <= 76
- Andante <= 108
- Moderato <= 120
- Allegro <= 168
- Presto <= 200
- Prestissimo > 200

**Note:** This does not find BPM from file, you will need to set BPM tag with e.g. MixMiester BPM Analyzer or Mixed In Key
