package com.fivenonjangi.noning.data.dto;

import com.fivenonjangi.noning.data.entity.BoardData;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
@Getter
@Setter
public class BoardDataDTO {
    private long id;
    private int opt1Selected;
    private int opt2Selected;
    private int like;
    private long boardId;

    public BoardData toEntity(){
        return BoardData.builder()
                .id(id)
                .opt1Selected(opt1Selected)
                .opt2Selected(opt2Selected)
                .like(like).boardId(boardId)
                .build();
    }
}