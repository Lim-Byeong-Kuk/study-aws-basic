package com.bk.backend.dto;

import lombok.*;

@Builder
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class AlbumDTO {

    private Long albumId;
    private String albumTitle;
    private String artistName;
    private String imageUrl;
}
