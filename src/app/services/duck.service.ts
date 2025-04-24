import { Injectable } from "@angular/core";
import { Duck } from "../interfaces/duck-interface";

@Injectable({ providedIn: "root" })
export class DuckService {
  private mockDucks: Duck[] = [
    {
      id: 1,
      name: "Mallard",
      // imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/DrakeMallardPortrait.png/330px-DrakeMallardPortrait.png",
      imageUrl: "/assets/Mallard.png",
      habitat: "Lakes/Ponds",
      fact: "Mallards are the most common duck species in the Northern Hemisphere!",
      isEndangered: false,
    },
    {
      id: 2,
      name: "Mandarin Duck",
      // imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Aix_galericulata_male_portrait.jpg/330px-Aix_galericulata_male_portrait.jpg",
      imageUrl: "/assets/Mandarin.jpg",
      habitat: "Forest Rivers",
      fact: "Mandarin ducks symbolize love in Chinese culture.",
      isEndangered: false,
    },
    {
      id: 3,
      name: "Hawaiian Duck (Koloa)",
      // imageUrl: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/187768091/1200",
      imageUrl: "/assets/Koloa.jpg",
      habitat: "Hawaiian Wetlands",
      fact: "Critically endangered due to habitat loss.",
      isEndangered: true,
    },
    {
      id: 4,
      name: "Laysan Duck",
      // imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/78/Starr_080607-7217_Boerhavia_repens.jpg",
      imageUrl: "/assets/Laysan.jpg",
      habitat: "Laysan Island",
      fact: "One of the rarest ducks globally, with fewer than 1,000 left.",
      isEndangered: true,
    },
    {
      id: 5,
      name: "White-winged Duck",
      // imageUrl: "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/159974241/900",
      imageUrl: "/assets/White-winged.jpg",
      habitat: "Southeast Asian Forests",
      fact: "Endangered due to deforestation.",
      isEndangered: true,
    },
    {
      id: 6,
      name: "Wood Duck",
      // imageUrl: "https://travisaudubon.org/home/wp-content/uploads/2018/01/APA_2016_Wood_Duck_Jess_Deitz_KK.jpg",
      imageUrl: "/assets/Wood.jpg",
      habitat: "Swamps",
      fact: "Nests in tree cavities!",
      isEndangered: false,
    },
  ];

  getDucks(): Duck[] {
    return this.mockDucks;
  }
}
