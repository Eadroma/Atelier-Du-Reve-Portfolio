/**
 * useContent — typed hook that loads site content from content.json.
 *
 * content.json is gitignored so personal data never appears on GitHub.
 * Copy `content.example.json` to `content.json` and fill in your data.
 */
import contentData from "./content.json";

export type Activity = {
  icon: string;
  title: string;
  description: string;
};

export type Modality = {
  label: string;
  value: string;
};

export type AtelierContent = {
  icon: string;
  title: string;
  subtitle: string;
  objectivesTitle: string;
  objectives: string[];
  activitiesTitle: string;
  activities: Activity[];
  audienceTitle: string;
  audience: string[];
  modalitiesTitle: string;
  modalities: Modality[];
};

export type SiteContent = typeof contentData;

/**
 * Returns the full typed site content loaded from content.json.
 * @returns The complete content object for the site.
 */
export function useContent(): SiteContent {
  return contentData;
}

export default useContent;
