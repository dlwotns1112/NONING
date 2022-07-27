package com.fivenonjangi.noning.data.entity.user;

import com.fivenonjangi.noning.data.dto.user.UserDataDTO;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "user_data")
public class UserData {
    @Id
    @Column(name = "user_data_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    String email;
    @Column(name = "is_email_verified")
    boolean isEmailVerified;
    String password;
    String nickname;
    String img;

    @OneToOne
    @JoinColumn(name = "user_id")
    User user;

    public void setUser(User user) {
        this.user = user;
    }


    public UserDataDTO toDTO(){
        return UserDataDTO.builder()
                .id(id)
                .email(email)
                .isEmailVerified(isEmailVerified)
                .password(password)
                .nickname(nickname)
                .img(img)
                .user(user.toDto())
                .build();
    }
}
