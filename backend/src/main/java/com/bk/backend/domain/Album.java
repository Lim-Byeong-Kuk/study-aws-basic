package com.bk.backend.domain;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "tbl_album")
@Builder
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Album {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long albumId;

    private String albumTitle;
    private String artistName;
    private String imageUrl;

}
