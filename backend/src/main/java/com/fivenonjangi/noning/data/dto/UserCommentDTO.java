package com.fivenonjangi.noning.data.dto;

import com.fivenonjangi.noning.data.entity.UserComment;
import lombok.*;


@Getter
@Setter
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class UserCommentDTO {
    private long id;
    private long commentId;
    private long userId;
    private boolean like;

    public UserComment toEntity(){
        return UserComment.builder()
                .id(id)
                .commentId(commentId)
                .userId(userId)
                .like(like)
                .build();
    }
}