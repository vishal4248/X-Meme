package com.memeapp.xmeme.models;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class MemeRequest {
    private String caption;
    private String imgUrl;
    private String madeBy;
}
