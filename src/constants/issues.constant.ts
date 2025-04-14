import { WHATBRINGSYOUHERETODAY, SPECIFICGOALS, SIGNS } from './enums';
const {
  ADDICTION,
  ANGER_OR_AGGRESSION,
  ANXIETY,
  CAREER_OR_WORK_ISSUES,
  CHRONIC_HEALTH_ISSUES,
  DEPRESSION,
  FAMILY_ISSUES,
  GRIEF_OR_LOSS,
  LIFE_TRANSITIONS,
  PARENTING_ISSUES,
  PRE_POST_PREGNANCY,
  RELATIONSHIP_ISSUES,
  SELF_ESTEEM_OR_SELF_WORTH,
  SEXUAL_OR_GENDER_IDENTITY_ISSUES,
  STRESS,
  TRAUMA,
} = WHATBRINGSYOUHERETODAY;

const {
  REDUCE_WORRY_OR_NERVOUSNESS,
  BOOST_SELF_CONFIDENCE,
  HANDLE_DAILY_PRESSURES,
  IMPROVE_PERSONAL_RELATIONSHIPS,
  DEAL_WITH_LOSS_AND_SADNESS,
  HEAL_FROM_PAST_TRAUMA,
  MANAGE_ANGER,
  DEAL_WITH_LIFE_CHANGES,
  HANDLE_WORK_PROBLEMS,
  QUIT_ADDICTIVE_BEHAVIOURS,
  STRENGTHEN_FAMILY_TIES,
  IMPROVE_FOCUS_AND_ORGANISATION,
  MANAGE_OBSESSIVE_THOUGHTS,
  STABILISE_MOOD_SWINGS,
  REDUCE_IMPULSIVE_BEHAVIOURS,
} = SPECIFICGOALS;

const {
  DIFFICULTY_FOCUSING_OR_PAYING_ATTENTION,
  SLEEP_DIFFICULTIES_OR_FREQUENT_NIGHTMARES,
  CHANGE_IN_APPETITE_OR_EATING_HABITS,
  FEELING_SAD_OR_HOPELESS,
  FREQUENT_IRRITATION_OR_ANGER,
  SUDDEN_PANIC_OR_INTENSE_FEAR,
  AVOIDING_SOCIAL_INTERACTIONS,
  USING_ALCOHOL_OR_OTHER_SUBSTANCES_FREQUENTLY,
  THOUGHTS_OF_SELF_HARM_OR_SUICIDE,
  PERSISTENT_UNWANTED_THOUGHTS_OR_URGES,
  IMPULSIVE_OR_RISKY_BEHAVIOURS,
  EXTREME_MOOD_SWINGS,
  REPETITIVE_UNCONTROLLED_BEHAVIOURS,
  DIFFICULTY_MAINTAINING_RELATIONSHIPS,
  RAPID_CHANGES_IN_SELF_IMAGE,
} = SIGNS;
const GOALS_MAP = new Map([
  [REDUCE_WORRY_OR_NERVOUSNESS, [ANXIETY]],
  [IMPROVE_FOCUS_AND_ORGANISATION, [ANXIETY, 'Show a clinical Psychologist']],
  [BOOST_SELF_CONFIDENCE, [DEPRESSION, SELF_ESTEEM_OR_SELF_WORTH]],
  [HANDLE_DAILY_PRESSURES, [DEPRESSION, STRESS]],
  [DEAL_WITH_LOSS_AND_SADNESS, [DEPRESSION, GRIEF_OR_LOSS]],
  [STABILISE_MOOD_SWINGS, [DEPRESSION, 'Show a clinical Psychologist']],
  [REDUCE_IMPULSIVE_BEHAVIOURS, [DEPRESSION, 'Show a clinical Psychologist']],
  [IMPROVE_PERSONAL_RELATIONSHIPS, [RELATIONSHIP_ISSUES]],
  [HEAL_FROM_PAST_TRAUMA, [TRAUMA]],
  [MANAGE_ANGER, [ANGER_OR_AGGRESSION]],
  [DEAL_WITH_LIFE_CHANGES, [LIFE_TRANSITIONS]],
  [HANDLE_WORK_PROBLEMS, [CAREER_OR_WORK_ISSUES]],
  [QUIT_ADDICTIVE_BEHAVIOURS, [ADDICTION]],
  [STRENGTHEN_FAMILY_TIES, [FAMILY_ISSUES]],
  [MANAGE_OBSESSIVE_THOUGHTS, ['Show a clinical Psychologist']],
]);

const SIGNS_MAP = new Map([
  [
    DIFFICULTY_FOCUSING_OR_PAYING_ATTENTION,
    [ANXIETY, DEPRESSION, STRESS, 'Show a clinical Psychologist'],
  ],
  [
    SLEEP_DIFFICULTIES_OR_FREQUENT_NIGHTMARES,
    [ANXIETY, DEPRESSION, STRESS, TRAUMA, 'Show a clinical Psychologist'],
  ],
  [
    CHANGE_IN_APPETITE_OR_EATING_HABITS,
    [
      ANXIETY,
      DEPRESSION,
      CHRONIC_HEALTH_ISSUES,
      'Show a clinical Psychologist',
    ],
  ],
  [
    FREQUENT_IRRITATION_OR_ANGER,
    [ANXIETY, DEPRESSION, ANGER_OR_AGGRESSION, 'Show a clinical Psychologist'],
  ],
  [SUDDEN_PANIC_OR_INTENSE_FEAR, [ANXIETY, TRAUMA]],
  [
    AVOIDING_SOCIAL_INTERACTIONS,
    [
      ANXIETY,
      DEPRESSION,
      TRAUMA,
      SELF_ESTEEM_OR_SELF_WORTH,
      'Show a clinical Psychologist',
    ],
  ],
  [
    USING_ALCOHOL_OR_OTHER_SUBSTANCES_FREQUENTLY,
    [ANXIETY, ADDICTION, 'Show a clinical Psychologist'],
  ],
  [
    FEELING_SAD_OR_HOPELESS,
    [
      DEPRESSION,
      GRIEF_OR_LOSS,
      CHRONIC_HEALTH_ISSUES,
      'Show a clinical Psychologist',
    ],
  ],
  [
    THOUGHTS_OF_SELF_HARM_OR_SUICIDE,
    [DEPRESSION, TRAUMA, CHRONIC_HEALTH_ISSUES, 'Show a clinical Psychologist'],
  ],
  [EXTREME_MOOD_SWINGS, ['Show a clinical Psychologist']],
  [REPETITIVE_UNCONTROLLED_BEHAVIOURS, ['Show a clinical Psychologist']],
  [PERSISTENT_UNWANTED_THOUGHTS_OR_URGES, ['Show a clinical Psychologist']],
  [IMPULSIVE_OR_RISKY_BEHAVIOURS, ['Show a clinical Psychologist']],
  [
    DIFFICULTY_MAINTAINING_RELATIONSHIPS,
    [RELATIONSHIP_ISSUES, 'Show a clinical Psychologist'],
  ],
  [RAPID_CHANGES_IN_SELF_IMAGE, ['Show a clinical Psychologist']],
]);

const ISSUE_SPECILIZATION_MAP = new Map([
  [ADDICTION, ['Addiction and Substance Abuse']],
  [ANGER_OR_AGGRESSION, ['Anger Management']],
  [ANXIETY, ['Anxiety Disorder', 'Stress Management']],
  [
    CAREER_OR_WORK_ISSUES,
    [
      'Career and Vocational Counselling',
      'Life Coaching and Personal Development',
    ],
  ],
  [
    CHRONIC_HEALTH_ISSUES,
    ['Chronic Illness and Disability', 'Psychosomatic Issues'],
  ],
  [DEPRESSION, ['Depression', 'Mood Disorders']],
  [
    FAMILY_ISSUES,
    ['Parenting Issues', 'Relationship and Marital Issues', 'Life Transitions'],
  ],
  [GRIEF_OR_LOSS, ['Grief and Loss', 'Trauma and Abuse']],
  [
    LIFE_TRANSITIONS,
    [
      'Life Transitions',
      'Life Coaching and Personal Development',
      'Career and Vocational Counselling',
    ],
  ],
  [PARENTING_ISSUES, ['Parenting Issues', 'Child and Adolescent Issues']],
  [
    PRE_POST_PREGNANCY,
    ['Pregnancy / Prenatal / Postpartum', 'Parenting Issues'],
  ],
  [RELATIONSHIP_ISSUES, ['Relationship and Marital Issues']],
  [
    SELF_ESTEEM_OR_SELF_WORTH,
    ['Self-Esteem / Self Worth and Self-Image Issues', 'Mood Disorders'],
  ],
  [
    SEXUAL_OR_GENDER_IDENTITY_ISSUES,
    ['Gender Identity and LGBTQ+ Issues', 'Sexual Dysfunction and Disorders'],
  ],
  [STRESS, ['Stress Management', 'Anxiety Disorder', 'Mood Disorders']],
  [
    TRAUMA,
    [
      'Trauma and Abuse',
      'Post-Traumatic Stress Disorder (PTSD)',
      'Grief and Loss',
    ],
  ],
]);

export { GOALS_MAP, SIGNS_MAP, ISSUE_SPECILIZATION_MAP };
