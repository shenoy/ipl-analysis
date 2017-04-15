# ipl-analysis

delivery
- runs
	-batsman
	-extras
- wickets
- extras


META required

meta:
  data_version: 0.9
  created: 2009-08-15
  revision: 1
DATA_VERSION required

The version of the data format the file contains. For example, the document you’re reading details version 0.9 of the data format. The actual content of this field will be in the form X.Y, where X is the major version number, and Y indicates the revision. For example, 1.2 indicates the file refers to the 2nd revision of version 1.

The major version number will only be updated when there are substantial, or critical, changes to the format of the file. For minor changes, such as the addition of a new field, only the revision will be updated. Ideally minor changes should be able to happen without affecting anything which is using the data.

CREATED required

The date on which the data file was first created. This will be in the format YYYY-MM-DD, for example 2010-12-06.

REVISION required

The revision number for this data version of the file. When first created this will be 1, and it will increment on subsequent revisions.

INFO required

info:
  city: Cape Town
  dates:
    - 2011-01-02
    - 2011-01-03
    - 2011-01-04
    - 2011-01-05
    - 2011-01-06
  gender: male
  match_type: Test
  outcome:
    by:
      runs: 6
    winner: Chennai Super Kings
  supersubs:
    South Africa: A Name
  teams:
    - South Africa
    - India
  toss:
    decision: field
    winner: India
  umpires:
    - IJ Gould
    - SJA Taufel
  venue: Newlands
BOWL_OUT optional

The balls of any bowl-out. This will contain 1 entry (an associative array) for each ball bowled in the bowl-out, with the entries bowler, and outcome.

BOWLER optional

This is the bowler who bowled the ball in the bowl-out.

OUTCOME optional

This is the outcome of the bowl-out ball, either hit, or miss.

CITY optional

The city in which the game took place.

COMPETITION optional

The competition the match was part of. At the moment this value, if provided, will be always be IPL, or Big Bash League, however these should not be regarded as the only possible options.

DATES required

The dates on which the game took place. If there is just one day, for example in a T20 match, then it will be an array containing just that one date.

GENDER required

The gender of the players who took part on the match. At the moment this value will be either female, or male, however these should not be regarded as the only possible options.

MATCH_TYPE required

The type of match this data file refers to. Currently the possible values are Test, ODI, T20, IT20 (International T20), ODM (One-day match) or MDM (multi-day match).

NEUTRAL_VENUE optional

If this is in the file then the value will be 1. This indicates that the game was played on venue neither team would regard as a home ground.

OUTCOME required

The data for this field is an associative array which details the outcome of the match this data file refers to. It contains information such as which team won the match, whether the game was a draw, tie, or no result, and any margin of victory.

BY optional

This entry is an associate array which details how much the winning team won by. It is an associative array with the possible values of innings, runs, and wickets.

INNINGS optional

If the match was won was by an innings and something then this entry will appear with a value of 1, for the 1 innings.

RUNS optional

If the match was won by a number of runs, or and innings and a number of runs, then this will contain the runs.

WICKETS optional

If the match was won by a number of wickets, then this will contain the number of wickets.

BOWL_OUT optional

This field will list the winner of any bowl-out which decides a tie in a T20 match.

ELIMINATOR optional

This field will list the winner of any elimination super-over which decides a tie in a T20 match.

METHOD optional

This field will detail any method used to determine the winner where a match has been curtailed for some reason. Currently the only value this will contain is D/L when a match uses the Duckworth Lewis method.

RESULT optional

The result of the match if the match was not won by one of the teams. Currently the possible values are draw, no result or tie.

WINNER optional

If a team won the match then the name of the team will be here.

OVERS optional

If the match_type is one of ODI, T20 or IT20 then this will indicate how many overs there are in each innings. Likely to be 50 for ODI matches, or 20 for T20 or IT20 matches.

PLAYER_OF_MATCH optional

If this field appears then it will contain an array of any players who were adjudged to be the player of the match.

SUPERSUBS optional

The data for this field is an associative array which details any supersubs used by each team in the match. The keys for the entry will be the names of any teams that used a super-sub, while the the values will be the names of the super-subs for those teams.

TEAMS required

An array containing the teams who played in the match. There will always be two entries. If the match is not being played on a neutral venue the first team listed will be the home team.

TOSS required

WINNER required

This will list the team which won the toss, and will be one of the teams listed as playing this match.

DECISION required

The decision made by the team winning the toss. This will be either bat or field.

UMPIRES required

An array containing the umpires who adjudicated in the match. There will always be two entries.

VENUE optional

The venue in which the game took place.

INNINGS required

innings:
  - 1st innings:
      team: Ireland
      deliveries:
        - 0.1:
            batsman: WTS Porterfield
            bowler: IK Pathan
            extras:
              wides: 1
            non_striker: JP Bray
            runs:
              batsman: 0
              extras: 1
              total: 1
        - 0.2:
            batsman: WTS Porterfield
            bowler: IK Pathan
            non_striker: JP Bray
            runs:
              batsman: 0
              extras: 0
              total: 0
  - 2nd innings:
      team: India
      deliveries:
        - 0.1:
            batsman: G Gambhir
            bowler: WB Rankin
            non_striker: RG Sharma
            runs:
              batsman: 4
              extras: 0
              total: 4
An array of associative arrays, each representing an innings within the game, in the order in which they took place. Each associative array has a single key (such as ‘1st innings’) which specifies the “name” of the innings and then the value is a further associative array with the details of that innings, such as the team batting, and the deliveries faced within the innings.

An simple example is show above, showing 2 innings of a one-day match. The first innings shows Ireland facing 2 balls, with William Porterfield, while the second innings shows 1 ball of the Indian reply.

TEAM required

The team which is batting must be specified in the data for the innings. This will be one of the two teams mentioned in the teams section for the match.

ABSENT_HURT optional

If this field is provided it will be an array of players who did not take part in the innings due to being absent hurt.

PENALTY_RUNS optional

innings:
  - 1st innings:
      team: Ireland
      penalty_runs:
        pre: 5
      deliveries:
        ...
If this field is provided it will be a simple associative array which details any penalty runs added either before or after the innings. If penalty runs were added at the start of the innings they will be included in the pre field, whereas penalty runs added after the innings will be in the post field. The example above shows penalty runs added at the start of the innings.

DECLARED optional

If this is in the file then the value will be yes. This indicates that the innings was declared.

DELIVERIES required

An array of associative arrays each representing a delivery within the innings, in the order in which they took place. Each associative array has a single key (such as 23.5) which specifies the particular ball (in that case the 5th ball of the 24th over), then the value is a further associative array with the details of that delivery.

BATSMAN required

The batsman who faced the delivery.

NON_STRIKER required

The player who was the non-striker for the delivery.

BOWLER required

The bowler who bowled the delivery.

RUNS required

The data for this field is a simple associative array which details the breakdown of the runs scored from the ball. It breaks the runs down to show which the batsman scored, which were extras, and the total scored from the ball. There is also the ability to indicate that a 4 or 6 was not an actual boundary should, for example if the batsmen ran a 4.

BATSMAN required

The total number of runs scored by the batsman off the ball. If the batsman failed to score this will show 0.

EXTRAS required

The total number of runs conceded via extras off the ball. If no extras were conceded this will show 0.

NON_BOUNDARY optional

If this is listed against the delivery then the value will be 1. This indicates that the 4 or 6 scored was not via an actual boundary.

TOTAL required

The total number of runs scored off this delivery. If no runs were scored from the delivery then this will display 0.

REPLACEMENTS optional

The data for this field is an associative array providing the details of any replacements which happened before this delivery took place. It shows who was substituted in and out, why, and which team it was for, as well as what type of replacement it is, match or role. These different types are grouped together within the replacements section, and it's possible that a delivery could have both types. Examples of the section are as follows:

replacements:
  role:
    - in: KJ Abbott
      reason: injury
      role: bowler
replacements:
  match:
    - in: CT Bancroft
      out: SM Whiteman
      reason: concussion_substitute
      team: Perth Scorchers
IN required

The name of the player who came in as part of the replacement. If the replacement is a supersub match replacement then this value will match the player listed as a supersub for the team.

OUT required (for match); required (for batter role replacement)

The name of the player who went out as part of the replacement. Required when it is a match replacement, and also required for a role replacement when a batter is being replaced. Not used for any other type of role replacement at the moment.

REASON required

The reason for the replacement. If a match replacement, this value must be one of concussion_substitute, or supersub. Otherwise, if a role replacement, this value must be one of excluded - high full pitched balls, excluded - running on the pitch, injury, too many overs, or unknown.

ROLE required (for role)

The role of the player being replaced, currently either batter, or bowler.

TEAM required (for match)

The name of the team the substitution was for.

WICKET optional

If a wicket occurs then this entry will be in the file and will provide details on the wicket, such as which player is out, what type of dismissal it was, and any fielders who were involved.

In the *very unlikely* case that a wicket falls and another player retires hurt on the same ball, this will be an array containing an entry for each wicket. At the moment we only have a single match that meets this criteria, the 1st Test between Pakistan and Australia in 2014.

KIND required

The kind of dismissal that took place. This will be one of bowled, caught, caught and bowled, lbw, stumped, run out, retired hurt, hit wicket, obstructing the field, hit the ball twice, handled the ball, or timed out.

PLAYER_OUT required

The name of the player who is out.

FIELDERS optional

Any fielders who were involved in the dismissal. Generally this will be the player who took a catch, or who was involved in a run-out.

EXTRAS optional

If extras were conceded from this delivery then this will indicate how the extras came about. The value of the field will be an associative array with byes, legbyes, noballs, penalty, and wides as the possible keys, and the associated value for each will be the number of runs from each. In the example shown above Irfan Pathan bowled a wide on the first ball of the Irish innings.