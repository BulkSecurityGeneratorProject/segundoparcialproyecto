package com.alberto.myapp.repository;

import com.alberto.myapp.domain.Team;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Team entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TeamRepository extends JpaRepository<Team, Long> {

}